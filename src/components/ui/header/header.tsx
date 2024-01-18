import { useContext } from "react";
import { ColorThemeContext } from "context/color_theme/color_theme_context_provider";
import { HeaderContextProvider } from "context/header_context/header_context_provider";

import { StyledContainer } from "components/shared/container.styled";
import { Logo } from "components/shared/logo/logo";

import { BurgerMenu } from "./components/burger_menu/burger_menu";
import { StyledHeader, StyledHeaderWrapper } from "./components/header.styled";
import { HeaderButtons } from "./components/header_buttons/header_buttons";
import { NavBar } from "./components/nav_bar/nav_bar";
import { Search } from "./components/search/search";

export const Header = () => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  return (
    <HeaderContextProvider>
      <StyledHeader $colors={colors}>
        <StyledContainer>
          <StyledHeaderWrapper>
            <Logo />
            <NavBar />
            <HeaderButtons />
          </StyledHeaderWrapper>
        </StyledContainer>
      </StyledHeader>
      <Search />
      <BurgerMenu />
    </HeaderContextProvider>
  );
};
