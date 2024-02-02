import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ColorThemeContext } from "../../../../../context/color_theme/color_theme_context_provider";
import { HeaderContext } from "../../../../../context/header_context/header_context_provider";

import {
  StyledUserMenuContainer,
  StyledUserMenuNavButton,
  StyledUserMenuWrapper,
} from "./user_menu.styled";

export const UserMenu = () => {
  const { getTheme, themeType } = useContext(ColorThemeContext);
  const colors = getTheme(themeType);

  const { userMenuIsActive, setUserMenuIsActive, userMenuRef } =
    useContext(HeaderContext);

  const navigate = useNavigate();

  const handleClickOutside = (event: MouseEvent) => {
    !userMenuRef.current?.contains(event.target as HTMLDivElement) &&
      setUserMenuIsActive(false);
  };
  const handleClickSignUpButton = () => {
    navigate("/authorisation/sign_up");
  };
  const handleClickSignInButton = () => {
    navigate("/authorisation/sign_in");
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {userMenuIsActive && (
        <StyledUserMenuContainer>
          <StyledUserMenuWrapper $colors={colors} ref={userMenuRef}>
            <StyledUserMenuNavButton
              $colors={colors}
              type="button"
              onClick={handleClickSignUpButton}
            >
              Sign Up
            </StyledUserMenuNavButton>
            <StyledUserMenuNavButton
              $colors={colors}
              type="button"
              onClick={handleClickSignInButton}
            >
              Sign In
            </StyledUserMenuNavButton>
          </StyledUserMenuWrapper>
        </StyledUserMenuContainer>
      )}
    </>
  );
};
