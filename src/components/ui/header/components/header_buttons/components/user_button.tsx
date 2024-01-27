import { useContext } from "react";
import PersonIcon from "@mui/icons-material/Person";

import { ColorThemeContext } from "../../../../../../context/color_theme/color_theme_context_provider";

import { StyledHeaderButton } from "./header_button_wrapper.styled";

export const UserButton = () => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  return (
    <StyledHeaderButton type="button" $colors={colors}>
      <PersonIcon />
    </StyledHeaderButton>
  );
};
