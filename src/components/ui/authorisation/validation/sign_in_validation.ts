import * as Yup from "yup";

export const signInValidation = Yup.object().shape({
  email: Yup.string()
    .email("Incorrect email format.")
    .required("Email is a required field."),
  password: Yup.string().required("Password is a required field."),
});

interface ISignInInitialValuesType {
  email: string;
  password: string;
}

export const signInInitialValues: ISignInInitialValuesType = {
  email: "",
  password: "",
};
