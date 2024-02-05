import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";
import { authentificationUser, createUser, getUsersLoginsAndEmails, } from "../../../redux/reducers/auth_reducer/auth_reducer";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { generateToken } from "../../utils/generate_token";
import { FormButtons } from "./components/form_buttons/from_buttons";
import { FormHeader } from "./components/form_header/form_header";
import { FormInput } from "./components/form_input/form_input";
import { FormLabelTitle } from "./components/form_label_title/form_label_title";
import { FormMainTitle } from "./components/form_main_title/form_main_title";
import { signInInitialValues, signInValidation, } from "./validation/sign_in_validation";
import { signUpInitialValues, signUpValidation, } from "./validation/sign_up_validation";
import { StyledForm, StyledFormContainer } from "./authorisation_form.styled";
export const AuthorisationForm = ({ formFor }) => {
    const { getTheme, themeType } = useContext(ColorThemeContext);
    const colors = getTheme(themeType);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const usersLoginsAndEmails = useAppSelector((state) => state.appAuthReducer.usersLoginsAndEmails);
    useEffect(() => {
        dispatch(getUsersLoginsAndEmails());
    }, []);
    const user = useAppSelector((state) => state.appAuthReducer.user);
    useEffect(() => {
        user && navigate("/home");
    }, [user]);
    const handleSignUpSubmit = (values) => {
        dispatch(createUser({
            login: values.login,
            email: values.email,
            password: values.password,
            token: generateToken(32),
            favoriteMovies: [],
            theme: themeType,
        }));
    };
    const handleSignInSubmit = (values) => {
        dispatch(authentificationUser({
            email: values.email,
            password: values.password,
        }));
    };
    return (<StyledFormContainer>
      <Formik initialValues={formFor === "sign_up" ? signUpInitialValues : signInInitialValues} validationSchema={formFor === "sign_up"
            ? signUpValidation(usersLoginsAndEmails)
            : signInValidation} onSubmit={(values, { setSubmitting }) => {
            formFor === "sign_up" &&
                handleSignUpSubmit(values);
            formFor === "sign_in" &&
                handleSignInSubmit(values);
            setSubmitting(false);
        }}>
        {({ isValid }) => (<StyledForm $colors={colors}>
            <FormHeader />
            <FormMainTitle formTitle={formFor === "sign_up" ? "Sign Up" : "Sign In"}/>
            {formFor === "sign_up" && (<>
                <FormLabelTitle title={"Login"}/>
                <FormInput inputId="login"/>
              </>)}
            <FormLabelTitle title={"Email"}/>
            <FormInput inputId="email"/>
            <FormLabelTitle title={"Password"}/>
            <FormInput inputId="password"/>
            {formFor === "sign_up" && (<>
                <FormLabelTitle title={"Confirm Password"}/>
                <FormInput inputId="confirm_password"/>
              </>)}
            <FormButtons submitIsActive={isValid} handleSubmit={() => {
                console.log("Data sending...");
            }}/>
          </StyledForm>)}
      </Formik>
    </StyledFormContainer>);
};
