import { useContext } from "react";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import { ColorThemeContext } from "context/color_theme/color_theme_context_provider";

import { StyledHeaderButton } from "./header_button_wrapper.styled";

export const SwitchThemeButton = () => {
  const { getTheme, themeType, setThemeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const handleClick = () => {
    themeType === "dark" ? setThemeType("light") : setThemeType("dark");
  };

  return (
    <StyledHeaderButton type="button" $colors={colors} onClick={handleClick}>
      <Brightness3Icon />
    </StyledHeaderButton>
  );
};
