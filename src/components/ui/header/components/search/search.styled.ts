import styled from "styled-components";

import { IColorsProps } from "../../../../../context/color_theme/color_themes";
import { MEDIA_LARGE_LAPTOP } from "../../../../consts/media_vars";

export const StyledSearchWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
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
