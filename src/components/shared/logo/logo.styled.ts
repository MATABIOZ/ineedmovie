import styled from "styled-components";

import { IColorsProps } from "../../../context/color_theme/color_themes";
import { MEDIA_LARGE_LAPTOP, MEDIA_MOBILE } from "../../consts/media_vars";

export const StyledLogo = styled.div({
  display: "flex",
  alignItems: "center",
});

export const StyledLogoIconWrapper = styled.div<IColorsProps>(
  ({ $colors }) => ({
    border: `10px solid ${$colors.colorfulItem}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    [MEDIA_LARGE_LAPTOP]: {
      border: `8px solid ${$colors.colorfulItem}`,
      width: 50,
      height: 50,
    },
    [MEDIA_MOBILE]: {
      border: `6px solid ${$colors.colorfulItem}`,
      width: 40,
      height: 40,
    },
    "> svg": {
      fontSize: 50,
      color: $colors.mainText,
      [MEDIA_LARGE_LAPTOP]: {
        fontSize: 42,
      },
      [MEDIA_MOBILE]: {
        fontSize: 34,
      },
    },
  }),
);

export const StyledLogoTitle = styled.h1<IColorsProps>(({ $colors }) => ({
  fontFamily: "Sora",
  fontWeight: 700,
  fontSize: 30,
  color: $colors.mainText,
  paddingLeft: 2,
  [MEDIA_LARGE_LAPTOP]: {
    fontSize: 25,
  },
  [MEDIA_MOBILE]: {
    fontSize: 20,
  },
}));
