import * as Yup from "yup";

import { UserLoginAndEmailType } from "../../../../redux/reducers/auth_reducer/auth_reducer_types";

const checkMatch = (
  typeCheck: "login" | "email",
  value: string,
  arr: Array<UserLoginAndEmailType>,
) => {
  if (arr) {
    if (typeCheck === "login") {
      const matchArr = arr.filter((item) => item.login === value);
      return matchArr.length === 0;
    } else if (typeCheck === "email") {
      const matchArr = arr.filter((item) => item.email === value);
      return matchArr.length === 0;
    }
  }
  return false;
};

export const signUpValidation = (
  usersLoginsAndEmails: Array<UserLoginAndEmailType>,
) =>
  Yup.object().shape({
    login: Yup.string()
      .matches(
        /^[a-zA-Z0-9!@#$%^&*()_+{}|:"<>?[\];',./\\`~\s-]{3,}$/,
        "Login must contain at least 3 letters .",
      )
      .required("Login is a required field.")
      .test("login_match", "A user with this login already exists.", (value) =>
        checkMatch("login", value, usersLoginsAndEmails),
      ),
    email: Yup.string()
      .email("Incorrect email format.")
      .required("Email is a required field.")
      .test("email_match", "A user with this email already exists.", (value) =>
        checkMatch("email", value, usersLoginsAndEmails),
      ),
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

export interface ISignUpInitialValuesType {
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
