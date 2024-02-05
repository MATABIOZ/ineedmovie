import { useContext } from "react";
import { ColorThemeContext } from "../../../../../context/color_theme/color_theme_context_provider";
import { StyledFormMainTitle } from "./form_main_title.styled";
export const FormMainTitle = ({ formTitle }) => {
    const { getTheme, themeType } = useContext(ColorThemeContext);
    const colors = getTheme(themeType);
    return (<StyledFormMainTitle $colors={colors}>{formTitle}</StyledFormMainTitle>);
};
