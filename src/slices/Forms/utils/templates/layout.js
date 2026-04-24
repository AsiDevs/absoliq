const header = (logo) => {
  const imageSrc = logo?.url ? `${logo.url}` : "";
  const imageAlt = logo?.alt || "Logo";

  return `
          <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
            <tr>
              <td align="left" style="padding: 32px;">
                <img
                  src="${imageSrc}"
                  alt="${imageAlt}"
                  height="60"
                  style="display: block; border: 0; outline: none; text-decoration: none;"
                />
              </td>
            </tr>
          </table>
        `;
};

const footer = (logo) => {
  const imageSrc = logo?.url ? `${logo.url}&w=256` : "";
  const imageAlt = logo?.alt || "Logo";
  return `
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding: 32px;" role="presentation">
            <tr>
              <td style="border-bottom: 1px solid #dddddd; padding-bottom: 16px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                  <tr>
                    <td align="left" style="vertical-align: middle;">
                      <img
                        src="${imageSrc}"
                        alt="${imageAlt}"
                        height="30"
                        style="display: block; border: 0; outline: none; text-decoration: none;"
                      />
                    </td>
                    <td align="right" style="vertical-align: middle;">
                      <a
                        href="https://au.linkedin.com/in/nalini-reddy-53218427"
                        style="text-decoration: none;"
                        target="_blank"
                        rel="noopener"
                      >
                        <img
                          src="https://images.prismic.io/inspired-risk-services/aMkItGGNHVfTPQsK_linkedin.png?auto=format,compress"
                          alt="LinkedIn"
                          width="18"
                          height="18"
                          style="display: inline-block;"
                        />
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 16px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                  <tr>
                    <td align="left" style="font-size: 12px; color: #667085;">
                      © 2025 The Inspired Risk Services. All rights reserved.
                    </td>
                    <td align="right" style="font-size: 12px;">
                      <a
                        href="https://inspiredriskservices.netlify.app/privacy-policy/"
                        style="color: #667085; text-decoration: none; margin-left: 16px;"
                        target="_blank"
                        rel="noopener"
                      >
                        Terms
                      </a>
                      <a
                        href="https://inspiredriskservices.netlify.app/privacy-policy/"
                        style="color: #667085; text-decoration: none; margin-left: 16px;"
                        target="_blank"
                        rel="noopener"
                      >
                        Privacy
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        `;
};

export { header, footer };
