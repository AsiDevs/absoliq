import * as Yup from "yup";

export const contactFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().trim().email("Invalid email").required("Required"),
  business: Yup.string().required("Required"),
  website: Yup.string().required("Required"),
  adSpend: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
  date: "",
  time: "",
});

export const newsletterFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().trim().email("Invalid email").required("Required"),
});
