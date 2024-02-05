import { useContext } from "react";

import { ColorThemeContext } from "../../../context/color_theme/color_theme_context_provider";
import { StyledContainer } from "../../shared/container.styled";

import GithubLogoDark from "./pictures/github_logo_dark.svg";
import GithubLogoLight from "./pictures/github_logo_light.svg";
import TmdbLogo from "./pictures/tmdb_logo.svg";
import {
  StyledFooter,
  StyledFooterItemContainer,
  StyledFooterItemLogoImg,
  StyledFooterItemLogoText,
  StyledFooterItemLogoTextWrapper,
  StyledFooterItemLogoWrapper,
  StyledFooterItemTitle,
  StyledFooterText,
  StyledFooterWrapper,
} from "./footer.styled";

export const Footer = () => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  return (
    <StyledFooter>
      <StyledContainer>
        <StyledFooterWrapper $colors={colors}>
          <StyledFooterItemContainer>
            <StyledFooterItemTitle $colors={colors}>
              Repository:
            </StyledFooterItemTitle>
            <StyledFooterItemLogoWrapper
              to={"https://github.com/MATABIOZ/ineedmovie"}
            >
              <StyledFooterItemLogoImg
                src={themeType === "dark" ? GithubLogoLight : GithubLogoDark}
                alt="github"
              />
            </StyledFooterItemLogoWrapper>
          </StyledFooterItemContainer>
          <StyledFooterItemContainer>
            <StyledFooterItemTitle $colors={colors}>Api:</StyledFooterItemTitle>
            <StyledFooterItemLogoWrapper
              to={"https://developer.themoviedb.org/"}
            >
              <StyledFooterItemLogoImg src={TmdbLogo} alt="tmdb" />
            </StyledFooterItemLogoWrapper>
            <StyledFooterItemLogoTextWrapper to={"https://mockapi.io/"}>
              <StyledFooterItemLogoText $colors={colors}>
                mockapi.io
              </StyledFooterItemLogoText>
            </StyledFooterItemLogoTextWrapper>
          </StyledFooterItemContainer>
          <StyledFooterText $colors={colors}>
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </StyledFooterText>
        </StyledFooterWrapper>
      </StyledContainer>
    </StyledFooter>
  );
};
