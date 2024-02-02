import { FC, useContext } from "react";
import { Formik } from "formik";

import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";

import { FormButtons } from "./components/form_buttons/from_buttons";
import { FormHeader } from "./components/form_header/form_header";
import { FormInput } from "./components/form_input/form_input";
import { FormLabelTitle } from "./components/form_label_title/form_label_title";
import { FormMainTitle } from "./components/form_main_title/form_main_title";
import {
  signInInitialValues,
  signInValidation,
} from "./validation/sign_in_validation";
import {
  signUpInitialValues,
  signUpValidation,
} from "./validation/sign_up_validation";
import { StyledForm, StyledFormContainer } from "./authorisation_form.styled";

interface IAuthorisationFormProps {
  formFor: "sign_up" | "sign_in";
}

export const AuthorisationForm: FC<IAuthorisationFormProps> = ({ formFor }) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  return (
    <StyledFormContainer>
      <Formik
        initialValues={
          formFor === "sign_up" ? signUpInitialValues : signInInitialValues
        }
        validationSchema={
          formFor === "sign_up" ? signUpValidation : signInValidation
        }
        onSubmit={(values, { resetForm, setSubmitting }) => {
          console.log("Data sending...");
          setTimeout(() => {
            console.log("Data sended:");
            console.log(values);
          }, 1000);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isValid }) => (
          <StyledForm $colors={colors}>
            <FormHeader />
            <FormMainTitle
              formTitle={formFor === "sign_up" ? "Sign Up" : "Sign In"}
            />
            {formFor === "sign_up" && (
              <>
                <FormLabelTitle title={"Login"} />
                <FormInput inputId="login" />
              </>
            )}
            <FormLabelTitle title={"Email"} />
            <FormInput inputId="email" />
            <FormLabelTitle title={"Password"} />
            <FormInput inputId="password" />
            {formFor === "sign_up" && (
              <>
                <FormLabelTitle title={"Confirm Password"} />
                <FormInput inputId="confirm_password" />
              </>
            )}
            <FormButtons
              submitIsActive={isValid}
              handleSubmit={() => {
                console.log("Data sending...");
              }}
            />
          </StyledForm>
        )}
      </Formik>
    </StyledFormContainer>
  );
};
