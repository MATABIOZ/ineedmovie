import { NavLink } from "react-router-dom";
import styled from "styled-components";

import {
  IColorsProps,
  Theme,
} from "../../../../../context/color_theme/color_themes";
import {
  MEDIA_LAPTOP,
  MEDIA_LARGE_LAPTOP,
} from "../../../../consts/media_vars";

export const StyledNavBar = styled.div({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  [MEDIA_LAPTOP]: {
    display: "none",
  },
});

export const StyledNavBarWrapper = styled.ul<IColorsProps>(({ $colors }) => ({
  display: "flex",
  padding: "10px 25px",
  border: `4px solid ${$colors.thickBorder}`,
  borderRadius: 12,
  background: $colors.itemBackground,
  gap: 6,
  [MEDIA_LARGE_LAPTOP]: {
    padding: "8px 22px",
    border: `3px solid ${$colors.thickBorder}`,
  },
}));

interface IStyledNavLinkProps {
  $colors: Theme;
  $isactive: boolean;
}

export const StyledNavLink = styled(NavLink)<IStyledNavLinkProps>(
  ({ $colors, $isactive }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: $isactive ? "15px 24px" : "15px",
    margin: $isactive ? "0 15px" : "0",
    borderRadius: 8,
    backgroundColor: $isactive
      ? $colors.activeItemBackground
      : $colors.itemBackground,
    fontSize: 18,
    lineHeight: "25px",
    fontWeight: $isactive ? 500 : 400,
    color: $isactive ? $colors.mainText : $colors.secondaryText,
    [MEDIA_LARGE_LAPTOP]: {
      padding: $isactive ? "12px 16px" : "12px 8px",
      margin: $isactive ? "0 8px" : "0",
    },
  }),
);
