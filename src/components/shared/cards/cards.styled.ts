import styled from "styled-components";

import { IColorsProps } from "../../../context/color_theme/color_themes";
import { MEDIA_LARGE_LAPTOP, MEDIA_MOBILE } from "../../consts/media_vars";

export const StyledCardsWrapper = styled.div({
  width: "100%",
  marginTop: "24px",
  [MEDIA_MOBILE]: {
    marginTop: "14px",
  },
});

export const StyledCardsHeaderWrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingBottom: "24px",
  [MEDIA_MOBILE]: {
    paddingBottom: "14px",
  },
});

export const StyledCardsTitle = styled.h3<IColorsProps>(({ $colors }) => ({
  color: $colors.mainText,
  fontSize: "38px",
  fontWeight: 700,
  lineHeight: "150%",
  [MEDIA_LARGE_LAPTOP]: {
    fontSize: "30px",
  },
  [MEDIA_MOBILE]: {
    fontSize: "24px",
  },
}));

export const StyledCardsShowAllButton = styled.button<IColorsProps>(
  ({ $colors }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    padding: "10px 24px",
    backgroundColor: $colors.colorfulItem,
    color: $colors.mainText,
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "150%",
    [MEDIA_LARGE_LAPTOP]: {
      padding: "8px 20px",
      fontSize: "16px",
    },
    [MEDIA_MOBILE]: {
      padding: "6px 16px",
      fontSize: "14px",
      lineHeight: "20px",
    },
    "> svg": {
      color: $colors.mainText,
      fontSize: "28px",
      [MEDIA_LARGE_LAPTOP]: {
        fontSize: "26px",
      },
      [MEDIA_MOBILE]: {
        fontSize: "24px",
      },
    },
  }),
);
