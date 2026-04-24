import axios from "axios";
import { getAdminEmailTemplate } from "./templates/getAdminEmailTemplate";
import { getUserEmailTemplate } from "./templates/getUserEmailTemplate";

export const handleFormSubmit = async (
  values,
  resetForm,
  recipient,
  cc,
  bcc,
  setSuccess,
  setSubmitMessage,
  recaptchaToken,
  logo,
) => {
  if (!recipient) {
    throw new Error("Missing recipient email");
  }

  const adminEmails = recipient.split(",").slice(0, 2).join(",");

  const userEmailContent = getUserEmailTemplate(values, logo);
  const adminEmailContent = getAdminEmailTemplate(values, logo);

  const allEmailData = [
    {
      recipient: values.email,
      replyTo: adminEmails,
      emailRequestFrom: values.email,
      subject: `We got your message`,
      content: userEmailContent,
      cc,
      bcc,
    },
    {
      recipient: adminEmails,
      replyTo: values.email,
      emailRequestFrom: values.email,
      subject: `${values.name} | New Contact Submission`,
      content: adminEmailContent,
      cc,
      bcc,
    },
  ];

  // Sending the emails
  const response = await axios.post("/api/send-mail", {
    emails: allEmailData,
    recaptchaToken,
  });

  if (response.data.success) {
    setSuccess(true);
    setSubmitMessage("Your form has been submitted successfully!");
    resetForm();
  } else {
    throw new Error("Failed to send emails");
  }

  // Reset the message after a timeout
  setTimeout(() => setSubmitMessage(""), 5000);
};
