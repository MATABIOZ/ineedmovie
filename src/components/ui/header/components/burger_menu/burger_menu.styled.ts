import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

import {
  IColorsProps,
  Theme,
} from "../../../../../context/color_theme/color_themes";
import { MEDIA_MOBILE } from "../../../../consts/media_vars";

export const StyledBurgerMenu = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  padding: "14px 32px",
  width: "100%",
  position: "absolute",
  right: 0,
  zIndex: 2,
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
    gap: "14px",
    maxWidth: 300,
    flex: 1,
  }),
);

interface IStyledBurgerMenuNavLinkProps {
  $colors: Theme;
  $isactive: boolean;
  $isFavorites: boolean;
  $favoritesIsUnlock: boolean;
}

export const StyledBurgerMenuNavLink = styled(
  NavLink,
)<IStyledBurgerMenuNavLinkProps>(
  ({ $colors, $isactive, $isFavorites, $favoritesIsUnlock }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 16px",
    border: $isFavorites ? `1px solid ${$colors.thinBorder}` : "none",
    borderRadius: 8,
    backgroundColor: $isactive
      ? $colors.activeItemBackground
      : $colors.itemBackground,
    fontSize: 18,
    lineHeight: "25px",
    fontWeight: 400,
    color: $isactive ? $colors.mainText : $colors.secondaryText,
    minWidth: 200,
    cursor: $isFavorites && !$favoritesIsUnlock ? "no-drop" : "pointer",
    opacity: $isFavorites && !$favoritesIsUnlock ? 0.5 : 1,
  }),
);
