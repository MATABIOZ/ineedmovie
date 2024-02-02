import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ColorThemeContext } from "../../../../../context/color_theme/color_theme_context_provider";
import { HeaderContext } from "../../../../../context/header_context/header_context_provider";

import {
  StyledBurgerMenu,
  StyledBurgerMenuNavLink,
  StyledBurgerMenuWrapper,
} from "./burger_menu.styled";

export const BurgerMenu = () => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const { pathname } = useLocation();

  const burgerNavLinkTitlesArr = ["Home", "Genres", "Favorites"];

  const { burgerIsActive, setBurgerIsActive, burgerMenuRef } =
    useContext(HeaderContext);

  const handleClickOutside = (event: MouseEvent) => {
    !burgerMenuRef.current?.contains(event.target as HTMLUListElement) &&
      setBurgerIsActive(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {burgerIsActive && (
        <StyledBurgerMenu>
          <StyledBurgerMenuWrapper $colors={colors} ref={burgerMenuRef}>
            {burgerNavLinkTitlesArr.map((item) => (
              <li key={burgerNavLinkTitlesArr.indexOf(item)}>
                <StyledBurgerMenuNavLink
                  to={`/${item.toLowerCase()}`}
                  $colors={colors}
                  $isactive={
                    pathname === `/${item.toLowerCase()}` ? true : false
                  }
                >
                  {item}
                </StyledBurgerMenuNavLink>
              </li>
            ))}
          </StyledBurgerMenuWrapper>
        </StyledBurgerMenu>
      )}
    </>
  );
};
