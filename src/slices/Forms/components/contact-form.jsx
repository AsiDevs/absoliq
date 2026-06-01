"use client";

import { useState } from "react";
import { Formik } from "formik";
import StyledSectionTitle from "@/app/components/styled-section-title";
import StyledFormikInput from "@/app/components/styled-formik-input";
import { contactFormValidationSchema } from "../utils/validationSchema";
import StyledButton from "@/app/components/styled-button";
import StyledPrismicRichTextSingle from "@/app/components/styled-prismic-richtext-single";
import { handleFormSubmit } from "../utils/submitHandler";

const ContactForm = ({ slice, settings }) => {
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
            business: "",
            website: "",
            adSpend: "",
            message: "",
            // date: "",
            // time: "",
          }}
          validationSchema={contactFormValidationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              await handleFormSubmit(
                values,
                resetForm,
                settings?.contact_form_submission_email || "hello@absoliq.com",
                setSuccess,
                setSubmitMessage,
                recaptchaToken,
                settings?.data?.header_logo,
              );
            } catch {
              setSuccess(false);
              setSubmitMessage("We couldn't send your enquiry right now. Please try again in a moment.");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-y-4.5">
                <div className="md:grid md:grid-cols-2 gap-4.5">
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
                <div className="md:grid md:grid-cols-2 gap-4.5">
                  <StyledFormikInput
                    label={"Business"}
                    name={"business"}
                    placeholder={"Your business"}
                    isRequired
                  />
                  <StyledFormikInput
                    label={"Website"}
                    isRequired
                    name={"website"}
                    placeholder={"www.example.com"}
                  />
                </div>
                <StyledFormikInput
                  label={"Monthly ad spend"}
                  isRequired
                  name={"adSpend"}
                  placeholder={"How much your monthly ad budget?"}
                />
                <StyledFormikInput
                  label={"What do you want to discuss?"}
                  isRequired
                  name={"message"}
                  placeholder={"Anything you’d like to discuss?"}
                  type="textarea"
                />
                {/* <div className="md:grid md:grid-cols-2 gap-4.5">
                  <StyledFormikInput
                    label={"Preferred meeting date"}
                    name={"date"}
                    placeholder={"XX:XX:XXXX"}
                    isRequired
                    type="date"
                  />
                  <StyledFormikInput
                    label={"Time"}
                    isRequired
                    name={"time"}
                    placeholder={"XX:XX"}
                    type="time"
                  />
                </div> */}
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
                  label={isSubmitting ? "Nudging..." : "Nudge an Expert"}
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

export default ContactForm;
