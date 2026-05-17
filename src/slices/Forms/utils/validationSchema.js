import * as Yup from "yup";

export const contactFormValidationSchema = Yup.object().shape({
  email: Yup.string().trim().email("Invalid email").required("Required"),
});

export const newsletterFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().trim().email("Invalid email").required("Required"),
});
