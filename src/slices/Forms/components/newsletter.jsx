"use client";

import { useState } from "react";
import { Formik } from "formik";
import StyledSectionTitle from "@/app/components/styled-section-title";
import StyledFormikInput from "@/app/components/styled-formik-input";
import { contactFormValidationSchema } from "../utils/validationSchema";
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
          validationSchema={contactFormValidationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleFormSubmit(
              values,
              resetForm,
              recipient,
              cc,
              bcc,
              setSuccess,
              setSubmitMessage,
              recaptchaToken,
              settings?.data.header_logo,
            )
              .catch((e) => {
                console.log("E: ", e);
                setSuccess(false);
                setSubmitMessage(
                  "We couldn't send your enquiry right now. Please try again in a moment.",
                );
              })
              .finally(() => setSubmitting(false));
          }}
        >
          {({ handleSubmit }) => (
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
                className="text-text-light text-[12px] mt-7 mb-12 disclaimer"
                field={slice?.primary?.disclaimer_text}
              />
              <StyledButton
                variant="primary"
                type={"submit"}
                label={"Subscribe"}
              />
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
