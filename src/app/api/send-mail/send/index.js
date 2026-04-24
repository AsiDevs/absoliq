import Mailgun from "mailgun.js";
import formData from "form-data";
import axios from "axios";
import determineRecipient from "./determineRecipient";

const domain = process.env.MAILGUN_DOMAIN;
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

const sendEmail = async (emailData, url) => {
  const { replyTo, subject, content, attachment } = emailData;
  const { recipient, cc, bcc } = await determineRecipient(emailData);
  if (!recipient) throw new Error("Recipient email is missing");

  const config = {
    from: `Website <web@${domain}>`,
    to: recipient,
    subject,
    html: content,
  };
  if (replyTo) config["h:Reply-To"] = replyTo;
  if (cc) config.cc = cc;
  if (bcc) config.bcc = bcc;

  if (attachment?.url) {
    const res = await axios.get(attachment.url, {
      responseEncoding: "base64",
    });
    config.attachment = {
      data: Buffer.from(res.data, "base64"),
      filename: attachment.name,
    };
  }

  return await mg.messages
    .create(domain, config)
    .then(() => ({ success: true }))
    .catch(async (e) => {
      console.error("Mailgun error:", e);
      return { success: false };
    });
};

const send = async ({ emails, recaptchaToken }, url) => {
  // if (!recaptchaToken)
  //   return { success: false, message: "Recaptcha token missing" };

  try {
    await axios.post(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        secret: process.env.CLOUDFLARE_SECRET_KEY,
        response: recaptchaToken,
      },
    );
  } catch (error) {
    console.log(error);
    return { success: false, message: "recaptchaToken verification error" };
  }

  try {
    const results = await Promise.all(
      emails.map((email) => sendEmail(email, url)),
    );

    const allSuccess = results.every((res) => res.success);

    return {
      success: allSuccess,
      message: allSuccess
        ? "All emails sent successfully"
        : "Some emails were failed",
    };
  } catch (err) {
    console.error("Send function error:", err);
    return { success: false, message: "Unexpected error while sending emails" };
  }
};

export default send;
