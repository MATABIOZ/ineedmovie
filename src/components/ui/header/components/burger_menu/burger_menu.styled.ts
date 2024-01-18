import { NavLink } from "react-router-dom";
import { IColorsProps, Theme } from "context/color_theme/color_themes";
import { styled } from "styled-components";

import { MEDIA_MOBILE } from "components/consts/media_vars";

export const StyledBurgerMenu = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  padding: "14px 32px",
  width: "100%",
  position: "absolute",
  right: 0,
  [MEDIA_MOBILE]: {
    justifyContent: "center",
  },
});

export const StyledBurgerMenuWrapper = styled.ul<IColorsProps>(
  ({ $colors }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "14px 22px",
    border: `1px solid ${$colors.thickBorder}`,
    borderRadius: 12,
    background: $colors.itemBackground,
    gap: 6,
    maxWidth: 300,
    flex: 1,
  }),
);

interface IStyledBurgerMenuNavLinkProps {
  $colors: Theme;
  $isactive: boolean;
}

export const StyledBurgerMenuNavLink = styled(
  NavLink,
)<IStyledBurgerMenuNavLinkProps>(({ $colors, $isactive }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px 16px",
  borderRadius: 8,
  backgroundColor: $isactive
    ? $colors.activeItemBackground
    : $colors.itemBackground,
  fontSize: 18,
  lineHeight: "25px",
  fontWeight: 400,
  color: $isactive ? $colors.mainText : $colors.secondaryText,
  minWidth: 200,
}));
