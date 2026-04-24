import { header, footer } from "./layout";

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const formatLabel = (key) =>
  key
    .replaceAll(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replaceAll(/[_-]+/g, " ")
    .replaceAll(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (match) => match.toUpperCase());

const formatValue = (value) => {
  if (Array.isArray(value)) {
    return value.length ? value.join(", ") : "N/A";
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  if (value === null || value === undefined || value === "") {
    return "N/A";
  }

  return String(value);
};

const formatValueForHtml = (value) =>
  escapeHtml(formatValue(value)).replaceAll("\n", "<br />");

export const getAdminEmailTemplate = (values, logo) => {
  const submittedDetails = Object.entries(values || {})
    .map(
      ([key, value]) =>
        `<li style="margin-bottom: 6px;">${escapeHtml(formatLabel(key))}: ${formatValueForHtml(value)}</li>`,
    )
    .join("");

  return `
          <html>
            <head>
              <meta charset="UTF-8" />
              <title>Contact Form Submission</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
              <div style="background-color: #f5f5f7; font-family: Arial, sans-serif;">
                <div style="max-width: 576px; margin: 0 auto; padding: 32px;">
                  ${header(logo)}
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                    <tr>
                      <td style="font-size: 16px; line-height: 26px; color: #333333; padding: 32px; background-color: white; border-radius: 14px; border: 1px solid #EAE8F2;">
                        <p style="margin: 0 0 12px;">New Contact Form Submission from <strong>${escapeHtml(values?.name || "N/A")}</strong></p>
                        <p style="margin: 0 0 12px;">Dear team,</p>
                        <p style="margin: 0 0 12px;">
                          A new inquiry has been submitted through the website's "Contact Us" form.
                        </p>
                        <p style="margin: 20px 0 10px; font-weight: bold;">Submitted Details:</p>
                        <ul style="padding-left: 20px; margin: 0;">
                          ${submittedDetails}
                        </ul>
                        <p>Please follow up with this lead as soon as possible.</p>
                        <p style="margin-top: 20px 0 0;">
                          Best regards,
                          <br />
                          <strong>The Enjoy Sri Lanka Team</strong>
                        </p>
                      </td>
                    </tr>
                  </table>
                  ${footer(logo)}
                </div>
              </div>
            </body>
          </html>
        `;
};
