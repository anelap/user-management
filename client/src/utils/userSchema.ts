import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(
      /^(\+?\d{3}[- ]?\d{2}[- ]?\d{3}[- ]?\d{3,4}|\+?\d{3} \d{2} \d{3} \d{3,4}|\d{3}[- ]?\d{3}[- ]?\d{3,4}|\d{3}\/\d{3}\/\d{3})$/,
      "Invalid phone number format"
    )
    .required("Phone number is required"),
});
