import * as yup from "yup"; //to validate data

export const signUpSchema = yup.object({
  name: yup.string().min(2).max(25).required("Please Enter your name"),
  email: yup.string().email().required("Please Enter your email"),
  password: yup.string().min(6).required("Please Enter your password"),
  confirm: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Password must be same"),
});
