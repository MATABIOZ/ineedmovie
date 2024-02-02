import { useContext } from "react";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import { ColorThemeContext } from "../../../../../../context/color_theme/color_theme_context_provider";
import { HeaderContext } from "../../../../../../context/header_context/header_context_provider";

import { StyledHeaderButton } from "./header_button_wrapper.styled";

export const UserButton = () => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const { userMenuIsActive, setUserMenuIsActive } = useContext(HeaderContext);

  const handleClick = () => {
    setTimeout(() => {
      !userMenuIsActive && setUserMenuIsActive(!userMenuIsActive);
    });
  };

  return (
    <StyledHeaderButton type="button" $colors={colors} onClick={handleClick}>
      {userMenuIsActive ? <PersonOutlineIcon /> : <PersonIcon />}
    </StyledHeaderButton>
  );
};
