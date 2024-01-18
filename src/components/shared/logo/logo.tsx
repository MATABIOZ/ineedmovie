import { useContext } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { ColorThemeContext } from "context/color_theme/color_theme_context_provider";

import {
  StyledLogo,
  StyledLogoIconWrapper,
  StyledLogoTitle,
} from "./logo.styled";

export const Logo = () => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);
  return (
    <StyledLogo>
      <StyledLogoIconWrapper $colors={colors}>
        <PlayCircleOutlineIcon />
      </StyledLogoIconWrapper>
      <StyledLogoTitle $colors={colors}>INeedMovie</StyledLogoTitle>
    </StyledLogo>
  );
};
