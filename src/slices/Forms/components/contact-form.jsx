"use client";

import { Formik } from "formik";
import StyledSectionTitle from "@/app/components/styled-section-title";
import StyledFormikInput from "@/app/components/styled-formik-input";
import { contactFormValidationSchema } from "../utils/validationSchema";
import StyledButton from "@/app/components/styled-button";

const ContactForm = ({ slice }) => {
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
            phone: "",
            country: "",
            subject: "",
            consent: false,
            message: "",
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
          {({
            handleSubmit,
            isSubmitting,
            values,
            errors,
            touched,
            setFieldValue,
            handleBlur,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="md:grid md:grid-cols-2 md:gap-x-4">
                <StyledFormikInput label={"Name*"} name={"name"} />
                <StyledFormikInput label={"Email address*"} name={"email"} />
              </div>
              <StyledButton
                variant="primary"
                type={"submit"}
                label={"Nudge an Expert"}
              />
              <p className="text-body-small text-text-light mt-4">
                You’ll hear from us within 24 hours.
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
