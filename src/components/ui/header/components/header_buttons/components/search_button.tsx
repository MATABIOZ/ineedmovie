import { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { ColorThemeContext } from "context/color_theme/color_theme_context_provider";
import { HeaderContext } from "context/header_context/header_context_provider";

import { StyledHeaderButton } from "./header_button_wrapper.styled";

export const SearchButton = () => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const { searchIsActive, setSearchIsActive, searchButtonRef } =
    useContext(HeaderContext);

  const handleSearchToggle = () => {
    setSearchIsActive(!searchIsActive);
  };

  return (
    <StyledHeaderButton
      type="button"
      $colors={colors}
      onClick={handleSearchToggle}
      ref={searchButtonRef}
    >
      {searchIsActive ? <SearchOffIcon /> : <SearchIcon />}
    </StyledHeaderButton>
  );
};
