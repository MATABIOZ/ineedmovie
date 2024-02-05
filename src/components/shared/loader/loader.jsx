import { useContext } from "react";
import { CircularProgress } from "@mui/material";
import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";
import { StyledLoaderWrapper } from "./loader.styled";
export const Loader = () => {
    const { getTheme, themeType } = useContext(ColorThemeContext);
    const colors = getTheme(themeType);
    return (<StyledLoaderWrapper>
      <CircularProgress size={100} sx={{ color: colors.colorfulItem }}/>
    </StyledLoaderWrapper>);
};
