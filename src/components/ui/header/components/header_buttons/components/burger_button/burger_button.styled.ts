import { IColorsProps } from "context/color_theme/color_themes";
import styled from "styled-components";

import { MEDIA_LAPTOP, MEDIA_MOBILE } from "components/consts/media_vars";

export const StyledBurgerButton = styled.button<IColorsProps>(
  ({ $colors }) => ({
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    border: `3px solid ${$colors.thinBorder}`,
    borderRadius: 6,
    backgroundColor: $colors.activeItemBackground,
    [MEDIA_LAPTOP]: {
      display: "flex",
    },
    "> svg": {
      color: $colors.mainText,
      fontSize: 25,
      [MEDIA_MOBILE]: {
        fontSize: 23,
      },
    },
  }),
);
