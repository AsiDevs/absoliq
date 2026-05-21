import { NextResponse } from "next/server";
import axios from "axios";

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

export async function POST(request) {
  const body = await request?.json();

  const email = body?.email;
  const name = body?.name;

  if (!email)
    return NextResponse.json(
      {
        error: "Bad Request",
        message: "Missing required email field",
        success: false,
      },
      { status: 400 },
    );

  try {
    await axios.post(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        email,
        customFields: [
          {
            name: "Name",
            value: name,
          },
        ],
      },
      {
        headers: { Authorization: `Bearer ${BEEHIIV_API_KEY}` },
      },
    );
    return NextResponse.json(
      {
        success: true,
        message: "Successfully added subscriber",
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal server error", success: false }, { status: 500 });
  }
}
