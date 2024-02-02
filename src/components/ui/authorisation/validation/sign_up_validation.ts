import * as Yup from "yup";

export const signUpValidation = Yup.object().shape({
  login: Yup.string()
    .matches(/^[a-zA-Z]{3,}$/, "Login must contain at least 3 letters.")
    .required("Login is a required field."),
  email: Yup.string()
    .email("Incorrect email format.")
    .required("Email is a required field."),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .matches(/[a-z]/, "Password must contain one lowercase letter.")
    .matches(/[A-Z]/, "Password must contain one uppercase letter.")
    .matches(/\d/, "Password must contain one number.")
    .matches(
      /[@$!%*?&]/,
      "Password must contain one of the characters: '@$!%*&?'.",
    )
    .required("Password is a required field."),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match.")
    .required("Confirm Password is a required field."),
});

interface ISignUpInitialValuesType {
  login: string;
  email: string;
  password: string;
  confirm_password: string;
}

export const signUpInitialValues: ISignUpInitialValuesType = {
  login: "",
  email: "",
  password: "",
  confirm_password: "",
};
