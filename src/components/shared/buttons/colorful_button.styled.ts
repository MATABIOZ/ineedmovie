import styled from "styled-components";

import { IColorsProps } from "../../../context/color_theme/color_themes";
import { MEDIA_LARGE_LAPTOP } from "../../consts/media_vars";

export const StyledColorfulButton = styled.button<IColorsProps>(
  ({ $colors }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "14px 24px",
    backgroundColor: $colors.colorfulItem,
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: 600,
    lineFeight: "150%",
    color: $colors.mainText,
    [MEDIA_LARGE_LAPTOP]: {
      padding: "14px 20px",
      fontSize: "14px",
    },
    "> svg": {
      color: $colors.mainText,
      fontSize: "28px",
      [MEDIA_LARGE_LAPTOP]: {
        fontSize: "24px",
      },
    },
  }),
);
