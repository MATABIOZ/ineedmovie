import { FC, useContext } from "react";

import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";

import { StyledErrorMessage } from "./error_message.styled";

interface ErrorMessageProps {
  errorText: string;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ errorText }) => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  return <StyledErrorMessage $colors={colors}>{errorText}</StyledErrorMessage>;
};
