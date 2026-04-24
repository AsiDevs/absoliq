import { header, footer } from "./layout";

export const getUserEmailTemplate = (values, logo) => {
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
                        <p style="margin: 0 0 12px;">Hi <strong>${values?.name || "N/A"}</strong>,</p>
                        <p style="margin: 0 0 12px;">Thank you for your recent message. We have received your inquiry and the details you provided.</p>
                        <p style="margin: 0 0 12px;">Our team is reviewing your information and will reach out to you within one business day to discuss how we can help you.</p>
                        <p style="margin: 20px 0 0;">
                          Best regards,
                          <br />
                          <strong>The Enjoy Sri Lanka Team</strong>
                        </p>
                      </td>
                    </tr>
                </div>
              </div>
            </body>
          </html>
       `;
};
