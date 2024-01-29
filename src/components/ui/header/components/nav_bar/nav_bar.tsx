import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { ColorThemeContext } from "../../../../../context/color_theme/color_theme_context_provider";

import {
  StyledNavBar,
  StyledNavBarWrapper,
  StyledNavLink,
} from "./nav_bar.styled";

export const NavBar = () => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const { pathname } = useLocation();

  const navLinkTitlesArr = ["Home", "Genres", "Favorites"];

  return (
    <StyledNavBar>
      <StyledNavBarWrapper $colors={colors}>
        {navLinkTitlesArr.map((item) => (
          <li key={navLinkTitlesArr.indexOf(item)}>
            <StyledNavLink
              to={`/${item.toLowerCase()}`}
              $colors={colors}
              $isactive={pathname === `/${item.toLowerCase()}` ? true : false}
            >
              {item}
            </StyledNavLink>
          </li>
        ))}
      </StyledNavBarWrapper>
    </StyledNavBar>
  );
};
