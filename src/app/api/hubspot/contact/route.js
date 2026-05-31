import { NextResponse } from "next/server";

const HUBSPOT_CONTACTS_URL = "https://api.hubapi.com/crm/v3/objects/contacts";
const HUBSPOT_SEARCH_URL =
  "https://api.hubapi.com/crm/v3/objects/contacts/search";
const TAG_PROPERTY = "roast_qualification_tag";

const formatCurrency = (value) => `$${Number(value || 0).toLocaleString()}`;

const compactProperties = (properties) =>
  Object.fromEntries(
    Object.entries(properties).filter(
      ([, value]) => value !== undefined && value !== null && value !== "",
    ),
  );

const toHubSpotProperties = (values = {}, qualificationTag = "") =>
  compactProperties({
    email: values.email,
    firstname: values.firstName,
    lastname: values.lastName,
    phone: values.mobile,
    company: values.companyName,
    website: values.website,
    country: values.country,
    lifecyclestage:
      qualificationTag === "Qualified" ? "marketingqualifiedlead" : "lead",
    hs_lead_status:
      qualificationTag === "Disqualified" ? "UNQUALIFIED" : "OPEN",
    [TAG_PROPERTY]: qualificationTag,
    roast_selling_type: values.sellingType,
    roast_marketing_channels: Array.isArray(values.marketingChannels)
      ? values.marketingChannels.join(", ")
      : values.marketingChannels,
    roast_marketing_budget: values.budget,
    roast_current_monthly_revenue: formatCurrency(values.currentMonthlyRevenue),
    roast_target_monthly_revenue: formatCurrency(values.targetMonthlyRevenue),
    roast_biggest_obstacle: values.biggestObstacle,
    roast_promise: values.roastPromise,
  });
const requestHubSpot = async (url, token, options) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
  const data = await response.json().catch(() => ({}));

  return { response, data };
};

const isUnknownPropertyError = (data = {}) => {
  const message = `${data.message || ""} ${data.errors?.map?.((error) => error.message).join(" ") || ""}`;
  return message.toLowerCase().includes("property");
};

const withoutCustomRoastProperties = (properties) => {
  const cleanedProperties = { ...properties };

  [
    TAG_PROPERTY,
    "roast_selling_type",
    "roast_marketing_channels",
    "roast_marketing_budget",
    "roast_current_monthly_revenue",
    "roast_target_monthly_revenue",
    "roast_biggest_obstacle",
    "roast_promise",
  ].forEach((property) => delete cleanedProperties[property]);

  return cleanedProperties;
};

const findExistingContactId = async (email, token) => {
  const { response, data } = await requestHubSpot(HUBSPOT_SEARCH_URL, token, {
    method: "POST",
    body: JSON.stringify({
      filterGroups: [
        {
          filters: [
            {
              propertyName: "email",
              operator: "EQ",
              value: email,
            },
          ],
        },
      ],
      properties: ["email"],
      limit: 1,
    }),
  });

  if (!response.ok) return null;

  return data.results?.[0]?.id || null;
};

const upsertContact = async (properties, token) => {
  const create = await requestHubSpot(HUBSPOT_CONTACTS_URL, token, {
    method: "POST",
    body: JSON.stringify({ properties }),
  });

  if (create.response.ok) {
    return create;
  }

  if (create.response.status === 409 && properties.email) {
    const contactId = await findExistingContactId(properties.email, token);

    if (contactId) {
      return requestHubSpot(`${HUBSPOT_CONTACTS_URL}/${contactId}`, token, {
        method: "PATCH",
        body: JSON.stringify({ properties }),
      });
    }
  }

  return create;
};

export async function POST(request) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json(
      { success: false, message: "HubSpot access token is missing" },
      { status: 500 },
    );
  }

  const { values, qualificationTag } = await request.json();

  if (!values?.email) {
    return NextResponse.json(
      { success: false, message: "Email is required to create a contact" },
      { status: 400 },
    );
  }

  const properties = toHubSpotProperties(values, qualificationTag);
  let result = await upsertContact(properties, token);

  if (!result.response.ok && isUnknownPropertyError(result.data)) {
    result = await upsertContact(
      withoutCustomRoastProperties(properties),
      token,
    );
  }

  if (!result.response.ok) {
    return NextResponse.json(
      {
        success: false,
        message: result.data.message || "HubSpot contact creation failed",
      },
      { status: result.response.status },
    );
  }

  return NextResponse.json({
    success: true,
    contactId: result.data.id,
  });
}
