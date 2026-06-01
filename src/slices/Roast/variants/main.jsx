"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import { getAdminEmailTemplate } from "@/slices/Forms/utils/templates/getAdminEmailTemplate";
import { getRoastUserEmailTemplate } from "@/slices/Forms/utils/templates/getRoastUserEmailTemplate";
import RoastProgress from "../components/roast-progress";
import StartStep from "../components/steps/start-step";
import FirstNameStep from "../components/steps/first-name-step";
import EmailStep from "../components/steps/email-step";
import SellStep from "../components/steps/sell-step";
import MarketingChannelsStep from "../components/steps/marketing-channels-step";
import CountryStep from "../components/steps/country-step";
import BudgetStep from "../components/steps/budget-step";
import WebsiteStep from "../components/steps/website-step";
import BusinessDescriptionStep from "../components/steps/business-description-step";
import CurrentRevenueStep from "../components/steps/current-revenue-step";
import TargetRevenueStep from "../components/steps/target-revenue-step";
import BiggestObstacleStep from "../components/steps/biggest-obstacle-step";
import ApologyStep from "../components/steps/apology-step";
import RoastPromiseStep from "../components/steps/roast-promise-step";
import BookingDetailsStep from "../components/steps/booking-details-step";

const TOTAL_PROGRESS_STEPS = 11;

const initialValues = {
  firstName: "",
  email: "",
  sellingType: "",
  marketingChannels: [],
  country: "Sri Lanka",
  budget: "",
  website: "",
  businessDescription: "",
  currentMonthlyRevenue: 0,
  targetMonthlyRevenue: 0,
  biggestObstacle: "",
  roastPromise: "",
  lastName: "",
  mobile: "",
  companyName: "",
};

const stepFields = [
  ["firstName"],
  ["email"],
  [],
  ["marketingChannels"],
  ["country"],
  [],
  ["website"],
  ["businessDescription"],
  ["currentMonthlyRevenue"],
  ["targetMonthlyRevenue"],
  ["biggestObstacle"],
];

const getNickname = (firstName) => {
  const nickname = firstName?.trim();
  return nickname || "Nickname";
};

const validate = (values) => {
  const errors = {};

  if (!values.firstName?.trim()) {
    errors.firstName = "Enter your first name.";
  }

  if (!values.email?.trim()) {
    errors.email = "Enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email.";
  }

  if (!values.marketingChannels?.length) {
    errors.marketingChannels = "Choose at least one channel.";
  }

  if (!values.country) {
    errors.country = "Choose your country.";
  }

  if (!values.website?.trim()) {
    errors.website = "Enter your website or say you do not have one.";
  }

  if (!values.businessDescription?.trim()) {
    errors.businessDescription = "Describe your business.";
  }

  if (!values.biggestObstacle?.trim()) {
    errors.biggestObstacle = "Tell us your biggest obstacle.";
  }

  if (!values.lastName?.trim()) {
    errors.lastName = "Enter your last name.";
  }

  if (!values.mobile?.trim()) {
    errors.mobile = "Enter your mobile number.";
  } else if (/[a-zA-Z]/.test(values.mobile)) {
    errors.mobile = "Mobile number cannot contain letters.";
  } else if (values.mobile.trim().length < 8) {
    errors.mobile = "Mobile number must be at least 8 digits.";
  } else if (values.mobile.trim().length > 12) {
    errors.mobile = "Mobile number must be no more than 12 digits.";
  }

  if (!values.companyName?.trim()) {
    errors.companyName = "Enter your company name.";
  }

  return errors;
};

const getTouchedForFields = (fields) =>
  fields.reduce((touched, field) => ({ ...touched, [field]: true }), {});

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const formatCurrency = (value) => currencyFormatter.format(Number(value || 0));

const buildRoastAdminPayload = (values) => ({
  name: `${values.firstName} ${values.lastName}`.trim(),
  firstName: values.firstName,
  lastName: values.lastName,
  email: values.email,
  mobile: values.mobile,
  companyName: values.companyName,
  website: values.website,
  country: values.country,
  sellingType: values.sellingType,
  marketingChannels: values.marketingChannels,
  marketingBudget: values.budget,
  businessDescription: values.businessDescription,
  currentMonthlyRevenue: formatCurrency(values.currentMonthlyRevenue),
  targetMonthlyRevenue: formatCurrency(values.targetMonthlyRevenue),
  biggestObstacle: values.biggestObstacle,
  roastPromise: values.roastPromise,
});

const createHubSpotContact = (values, qualificationTag) =>
  axios.post("/api/hubspot/contact", {
    values,
    qualificationTag,
  });

const Main = ({ settings }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [terminalStep, setTerminalStep] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [hasStarted, currentStep, terminalStep]);

  const adminEmails = (
    settings?.data?.contact_form_submission_email ||
    settings?.contact_form_submission_email ||
    "hello@absoliq.com"
  )
    .split(",")
    .slice(0, 2)
    .join(",");

  return (
    <div className="relative z-10 mx-auto w-full overflow-hidden text-white">
      <Formik
        initialValues={initialValues}
        validate={validate}
        validateOnBlur
        validateOnChange={false}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          setSubmitMessage("");

          try {
            const adminPayload = buildRoastAdminPayload(values);
            const logo = settings?.data?.header_logo;
            const [response] = await Promise.all([
              axios.post("/api/send-mail", {
                emails: [
                  {
                    recipient: values.email,
                    replyTo: adminEmails,
                    emailRequestFrom: values.email,
                    subject: "You wanted to be roasted?",
                    content: getRoastUserEmailTemplate(adminPayload, logo),
                  },
                  {
                    recipient: adminEmails,
                    replyTo: values.email,
                    emailRequestFrom: values.email,
                    subject: `${adminPayload.name || values.email} | New Roast Submission`,
                    content: getAdminEmailTemplate(adminPayload, logo),
                  },
                ],
                recaptchaToken: "",
              }),
              createHubSpotContact(values, "Qualified"),
            ]);

            if (!response.data.success) {
              throw new Error("Failed to send roast submission");
            }

            setSuccess(true);
            setSubmitMessage("Your strategy session details have been sent.");
            resetForm();
          } catch {
            setSuccess(false);
            setSubmitMessage(
              "We could not send your details right now. Please try again in a moment.",
            );
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {(formik) => {
          const nickname = getNickname(formik.values.firstName);
          const steps = [
            <FirstNameStep key="first-name" onContinue={handleContinue} />,
            <EmailStep
              key="email"
              nickname={nickname}
              onContinue={handleContinue}
            />,
            <SellStep
              key="sell"
              nickname={nickname}
              onContinue={handleContinue}
            />,
            <MarketingChannelsStep
              key="marketing-channels"
              onContinue={handleContinue}
            />,
            <CountryStep key="country" onContinue={handleContinue} />,
            <BudgetStep key="budget" onContinue={handleContinue} />,
            <WebsiteStep
              key="website"
              nickname={nickname}
              onContinue={handleContinue}
            />,
            <BusinessDescriptionStep
              key="business-description"
              nickname={nickname}
              onContinue={handleContinue}
            />,
            <CurrentRevenueStep
              key="current-revenue"
              onContinue={handleContinue}
            />,
            <TargetRevenueStep
              key="target-revenue"
              onContinue={handleContinue}
            />,
            <BiggestObstacleStep
              key="biggest-obstacle"
              nickname={nickname}
              onContinue={handleContinue}
              isSubmitting={formik.isSubmitting}
            />,
          ];

          async function handleContinue(valueOverrides = {}) {
            if (formik.isSubmitting) return;

            const terminalFields = {
              promise: ["roastPromise"],
              booking: [
                "firstName",
                "lastName",
                "mobile",
                "companyName",
                "website",
              ],
            };
            const fields =
              terminalFields[terminalStep] || stepFields[currentStep] || [];
            const errors = Object.keys(valueOverrides).length
              ? validate({ ...formik.values, ...valueOverrides })
              : await formik.validateForm();
            const hasStepError = fields.some((field) => errors[field]);

            if (hasStepError) {
              formik.setTouched(
                {
                  ...formik.touched,
                  ...getTouchedForFields(fields),
                },
                false,
              );
              return;
            }

            if (terminalStep === "promise") {
              setTerminalStep("booking");
              return;
            }

            if (terminalStep === "booking") {
              formik.submitForm();
              return;
            }

            if (currentStep === steps.length - 1) {
              if (Number(formik.values.currentMonthlyRevenue) === 0) {
                formik.setSubmitting(true);

                try {
                  await createHubSpotContact(formik.values, "Disqualified");
                  setTerminalStep("apology");
                } catch {
                  setTerminalStep("apology");
                } finally {
                  formik.setSubmitting(false);
                }

                return;
              }

              setTerminalStep("promise");
              return;
            }

            setCurrentStep((step) => Math.min(step + 1, steps.length - 1));
          }

          const activeProgressIndex = hasStarted
            ? Math.min(currentStep + 1, TOTAL_PROGRESS_STEPS - 1)
            : 0;

          return (
            <form onSubmit={formik.handleSubmit}>
              {!terminalStep && (
                <div className="pt-12 md:pt-18">
                  <RoastProgress
                    activeIndex={activeProgressIndex}
                    total={TOTAL_PROGRESS_STEPS}
                  />
                </div>
              )}
              {terminalStep === "apology" ? (
                <ApologyStep />
              ) : terminalStep === "promise" ? (
                <RoastPromiseStep
                  nickname={nickname}
                  onContinue={handleContinue}
                />
              ) : terminalStep === "booking" ? (
                <BookingDetailsStep
                  onContinue={handleContinue}
                  isSubmitting={formik.isSubmitting}
                  submitMessage={submitMessage}
                  success={success}
                />
              ) : !hasStarted ? (
                <StartStep onContinue={() => setHasStarted(true)} />
              ) : (
                steps[currentStep]
              )}
              {hasStarted && terminalStep !== "apology" && (
                <StepError
                  errors={formik.errors}
                  touched={formik.touched}
                  fields={
                    terminalStep === "promise"
                      ? ["roastPromise"]
                      : terminalStep === "booking"
                        ? [
                            "firstName",
                            "lastName",
                            "mobile",
                            "companyName",
                            "website",
                          ]
                        : stepFields[currentStep]
                  }
                />
              )}
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

const StepError = ({ errors, touched, fields = [] }) => {
  const firstError = fields.find((field) => touched[field] && errors[field]);

  if (!firstError) return null;

  return (
    <p className="mx-auto -mt-12 max-w-[590px] pb-12 text-center text-[14px] leading-6 text-error-primary">
      {errors[firstError]}
    </p>
  );
};

export default Main;
