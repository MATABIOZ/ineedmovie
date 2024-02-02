import { FC, useContext, useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ErrorMessage } from "formik";

import { ColorThemeContext } from "../../../../../context/color_theme/color_theme_context_provider";
import { StyledFormShowPasswordButton } from "../form_buttons/form_buttons.styled";

import { StyledInput, StyledInputContainer } from "./form_input.styled";
import { StyledFormInputError } from "./form_input_error.styled";

type InputIdType = "login" | "email" | "password" | "confirm_password";

interface IFormInputProps {
  inputId: InputIdType;
}

export const FormInput: FC<IFormInputProps> = ({ inputId }) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const [placeholder, setPlaceholder] = useState<string>(
    "Enter your password...",
  );

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const inputType: "text" | "email" | "password" =
    inputId === "login" || showPassword
      ? "text"
      : inputId === "email"
        ? "email"
        : "password";

  useEffect(() => {
    inputId === "confirm_password"
      ? setPlaceholder("Confirm your password...")
      : setPlaceholder(`Enter your ${inputId}...`);
  }, []);

  return (
    <StyledInputContainer $colors={colors}>
      <StyledInput
        type={inputType}
        placeholder={placeholder}
        id={inputId}
        name={inputId}
        required
        autoComplete="on"
        $colors={colors}
        $inputId={inputId}
      />
      <ErrorMessage name={inputId}>
        {(error) => <StyledFormInputError>{error}</StyledFormInputError>}
      </ErrorMessage>
      {(inputId === "password" || inputId === "confirm_password") && (
        <StyledFormShowPasswordButton
          $colors={colors}
          type="button"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </StyledFormShowPasswordButton>
      )}
    </StyledInputContainer>
  );
};
