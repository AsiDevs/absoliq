const axios = require("axios");

const formErrorsWebhook =
  "https://hooks.slack.com/services/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";

const formTestingWebhook =
  "https://hooks.slack.com/services/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";

export const slackFormError = async (text) => {
  if (!text || process.env.NEXT_PUBLIC_STAGE !== "production") return true;

  await axios
    .post(
      formErrorsWebhook,
      { text },
      {
        withCredentials: false,
      },
    )
    .then(() => null)
    .catch(() => {
      console.log("Failed to send the message to Slack");
    });

  return true;
};

export const slackFormTesting = async (text) => {
  await axios
    .post(
      formTestingWebhook,
      { text },
      {
        withCredentials: false,
      },
    )
    .then(() => null)
    .catch(() => {
      console.log("Failed to send the message to Slack");
    });

  return true;
};
