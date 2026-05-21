"use client";

import { useState } from "react";
import { Formik } from "formik";
import { handleSubscription } from "@/slices/Forms/utils/handle-subscription";
import StyledFormikInput from "../styled-formik-input";
import StyledPrismicRichTextSingle from "../styled-prismic-richtext-single";
import * as Yup from "yup";

const FooterNewsletter = () => {
  const [submitMessage, setSubmitMessage] = useState("");
  const [success, setSuccess] = useState(false);
  return (
    <div className="max-w-[500px] md:max-w-[320px] md:min-w-[320px] xl:min-w-[345px] xl:max-w-[345px]">
      <h5 className="text-title-base-blog font-bold mb-3 md:mb-6">
        Want to get smart?
      </h5>
      <p className="text-body-small-s mb-3 md:mb-6">
        Get millions worth scaling strategies straight to your inbox every week
        for free. Just put your email, will only send an email when we found
        something that is at least worth 1million.
      </p>
      <Formik
        className="relative z-10"
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .trim()
            .email("Invalid email")
            .required("Required"),
        })}
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
          <form onSubmit={handleSubmit} className="flex">
            <div className="flex w-full">
              <StyledFormikInput
                name={"email"}
                placeholder={"Enter your email..."}
                wrapperClass={"mb-0! flex-1"}
                className={
                  "bg-[#fff]! placeholder:text-text-description! rounded-tr-none! rounded-br-none! mb-0! text-text-secondary! w-full!"
                }
              />
              <button
                className="block px-5 w-fit bg-primary-dark rounded-tr-[999px] rounded-br-[999px] font-[18px] text-primary-white transition-timing hover:bg-secondary-dark cursor-pointer max-h-[46.5px]"
                disabled={isSubmitting}
              >
                I'm In
              </button>
            </div>
            {submitMessage && (
              <p
                className={`text-body-small-s mt-4 text-left ${success ? "text-success-primary" : "text-error-primary"}`}
              >
                {submitMessage}
              </p>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FooterNewsletter;
