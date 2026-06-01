import axios from "axios";

export const handleSubscription = async (
  values,
  resetForm,
  setSuccess,
  recaptchaToken = "",
  setSubmitMessage,
) => {
  const showMessage = (msg) => {
    setSubmitMessage(msg);
    setTimeout(() => setSubmitMessage(""), 10000);
  };

  try {
    const response = await axios.post("/api/create-subscription", {
      email: values?.email,
      name: values?.name,
      recaptchaToken,
    });

    if (response.data.success) {
      setSuccess(true);
      showMessage("You have successfully subscribed to our newsletter!");
      resetForm();
      axios.post("/api/hubspot/contact", {
        values: { email: values.email, firstName: values.name },
        qualificationTag: "",
      }).catch(() => {});
    } else {
      setSuccess(false);
      showMessage(
        "There has been an error with the subscription. Please try again.",
      );
    }
  } catch {
    setSuccess(false);
    showMessage(
      "There has been an error with the subscription. Please try again.",
    );
  }
};
