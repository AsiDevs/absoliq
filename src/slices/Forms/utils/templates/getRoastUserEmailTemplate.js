import { header, footer } from "./layout";

export const getRoastUserEmailTemplate = (values, logo) => {
  return `
          <html>
            <head>
              <meta charset="UTF-8" />
              <title>You wanted to be roasted?</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
              <div style="background-color: #f5f5f7; font-family: Arial, sans-serif;">
                <div style="max-width: 576px; margin: 0 auto; padding: 32px;">
                  ${header(logo)}
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                    <tr>
                      <td style="font-size: 16px; line-height: 26px; color: #333333; padding: 32px; background-color: white; border-radius: 14px; border: 1px solid #EAE8F2;">
                        <p style="margin: 0 0 12px;">Hi <strong>${values?.firstName || "there"}</strong>,</p>
                        <p style="margin: 0 0 12px;">Your Roast is confirmed and that's a smart move!</p>
                        <p style="margin: 0 0 12px;">This is a 30–45 minute diagnostic session. No pitch. No sales deck. Just an honest look at what's working in your marketing system, what isn't, and why.</p>
                        <p style="margin: 0 0 12px;">We'll come prepared.</p>
                        <p style="margin: 0 0 12px;">All we ask is that you do too. Be ready to talk numbers, channels, and what "inconsistent results" actually looks like in your business.</p>
                        <p style="margin: 0 0 12px;">You'll leave with clarity and that's the whole point of our Roast!</p>
                        <p style="margin: 0 0 12px;">Keep an eye on your inbox and we'll send you a link to lock in your time slot.</p>
                        <p style="margin: 20px 0 0;">
                          Catch you real soon,<br />
                          <strong>Dinath Gamage.</strong><br />
                          Head of Strategy at Absoliq
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
