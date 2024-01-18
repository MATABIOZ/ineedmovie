import { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { ColorThemeContext } from "context/color_theme/color_theme_context_provider";
import { HeaderContext } from "context/header_context/header_context_provider";

import { StyledBurgerButton } from "./burger_button.styled";

export const BurgerButton = () => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const { burgerIsActive, setBurgerIsActive, burgerButtonRef } =
    useContext(HeaderContext);

  const handleBurgerToggle = () => {
    setBurgerIsActive(!burgerIsActive);
  };

  return (
    <StyledBurgerButton
      type="button"
      $colors={colors}
      onClick={handleBurgerToggle}
      ref={burgerButtonRef}
    >
      {burgerIsActive ? <MenuOpenIcon /> : <MenuIcon />}
    </StyledBurgerButton>
  );
};
