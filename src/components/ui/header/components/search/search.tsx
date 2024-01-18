import { useContext, useEffect } from "react";
import { ColorThemeContext } from "context/color_theme/color_theme_context_provider";
import { HeaderContext } from "context/header_context/header_context_provider";

import { StyledSearch, StyledSearchWrapper } from "./search.styled";

export const Search = () => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const { searchIsActive, setSearchIsActive, searchInputRef } =
    useContext(HeaderContext);

  const handleClickOutside = (event: MouseEvent) => {
    !searchInputRef.current?.contains(event.target as HTMLInputElement) &&
      setSearchIsActive(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    searchIsActive && searchInputRef.current?.focus();
  }, [searchIsActive]);

  return (
    <>
      {searchIsActive && (
        <StyledSearchWrapper>
          <StyledSearch
            type="search"
            $colors={colors}
            placeholder="Search..."
            ref={searchInputRef}
          />
        </StyledSearchWrapper>
      )}
    </>
  );
};
