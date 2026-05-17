"use client";

import { useState } from "react";
import { Formik } from "formik";
import StyledSectionTitle from "@/app/components/styled-section-title";
import StyledFormikInput from "@/app/components/styled-formik-input";
import { newsletterFormValidationSchema } from "../utils/validationSchema";
import { handleSubscription } from "../utils/handle-subscription";
import StyledButton from "@/app/components/styled-button";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";

const Newsletter = ({ slice }) => {
  const [submitMessage, setSubmitMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");

  return (
    <div className="section-dark-bg rounded-xl py-6 px-4 md:p-10">
      <div className="relative z-100">
        <StyledSectionTitle
          slice={slice}
          textWhite
          leftAligned
          className={"mb-12!"}
        />
        <Formik
          className="relative z-10"
          initialValues={{
            name: "",
            email: "",
          }}
          validationSchema={newsletterFormValidationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            await handleSubscription(
              values,
              resetForm,
              setSuccess,
              "",
              setSubmitMessage,
            );
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-y-4.5">
                <StyledFormikInput
                  label={"Name"}
                  name={"name"}
                  placeholder={"Your name"}
                  isRequired
                />
                <StyledFormikInput
                  label={"Email address"}
                  name={"email"}
                  placeholder={"johndoe@gmail.com"}
                  isRequired
                />
              </div>
              <StyledPrismicRichTextSingle
                className="text-text-light text-[12px] mt-7 disclaimer"
                field={slice?.primary?.disclaimer_text}
              />
              {submitMessage && (
                <p
                  className={`text-body-small-s mt-4 text-left ${success ? "text-success-primary" : "text-error-primary"}`}
                >
                  {submitMessage}
                </p>
              )}
              <div className="mt-12">
                <StyledButton
                  variant="primary"
                  type={"submit"}
                  link={false}
                  label={isSubmitting ? "Subscribing..." : "Subscribe"}
                  disabled={isSubmitting}
                />
              </div>
              <StyledPrismicRichTextSingle
                className="text-body-small text-text-light mt-4"
                field={slice?.primary?.end_note}
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Newsletter;
