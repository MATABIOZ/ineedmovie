import { FC, useContext } from "react";

import { ColorThemeContext } from "../../../../../context/color_theme/color_theme_context_provider";

import { StyledFormLabelTitle } from "./form_label_title.styled";

type TitleType = "Login" | "Email" | "Password" | "Confirm Password";
type HtmlForType = "login" | "email" | "password" | "confirm_password";

interface IFormLabelTitleProps {
  title: TitleType;
}

export const FormLabelTitle: FC<IFormLabelTitleProps> = ({ title }) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const getHtmlFor = (title: TitleType): HtmlForType => {
    switch (title) {
      case "Login":
        return "login";
      case "Email":
        return "email";
      case "Password":
        return "password";
      case "Confirm Password":
        return "confirm_password";
    }
  };

  return (
    <StyledFormLabelTitle $colors={colors} htmlFor={getHtmlFor(title)}>
      {title}
    </StyledFormLabelTitle>
  );
};
