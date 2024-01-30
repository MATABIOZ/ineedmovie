import styled from "styled-components";

import { IColorsProps } from "../../../../../context/color_theme/color_themes";
import { MEDIA_LARGE_LAPTOP } from "../../../../consts/media_vars";

export const StyledSearchWrapper = styled.form({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

export const StyledSearch = styled.input<IColorsProps>(({ $colors }) => ({
  margin: "0 16px",
  padding: "10px 40px",
  maxWidth: 484,
  width: "100%",
  borderTop: "none",
  borderLeft: `1px solid ${$colors.thinBorder}`,
  borderRight: `1px solid ${$colors.thinBorder}`,
  borderBottom: `1px solid ${$colors.thinBorder}`,
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8,
  backgroundColor: $colors.itemBackground,
  color: $colors.mainText,
  fontSize: 16,
  "&::placeholder": {
    color: $colors.secondaryText,
  },
  [MEDIA_LARGE_LAPTOP]: {
    padding: "8px 22px",
    maxWidth: 404,
  },
}));

export const StyledSearchMessage = styled.p<IColorsProps>(({ $colors }) => ({
  margin: "0 16px",
  padding: "2px 40px",
  maxWidth: 484,
  width: "100%",
  border: `1px solid ${$colors.thinBorder}`,
  borderRadius: 8,
  backgroundColor: $colors.activeItemBackground,
  color: $colors.secondaryText,
  fontSize: 16,
  textAlign: "center",
  [MEDIA_LARGE_LAPTOP]: {
    padding: "2px 22px",
    maxWidth: 404,
    fontSize: 14,
  },
}));
