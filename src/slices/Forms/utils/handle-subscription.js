import axios from "axios";

export const handleSubscription = async (
  values,
  resetForm,
  setSuccess,
  recaptchaToken = "",
  setSubmitMessage,
) => {
  const response = await axios.post("/api/create-subscription", {
    email: values?.email,
    name: values?.name,
    recaptchaToken,
  });

  if (response.data.success) {
    setSuccess(true);
    setSubmitMessage("You have successfully subscribed to our newsletter!");
    resetForm();
  } else {
    throw new Error("Failed to send emails");
  }

  // Reset the message after a timeout
  setTimeout(() => setSubmitMessage(""), 10000);
};
