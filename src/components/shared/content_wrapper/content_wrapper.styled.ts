import styled from "styled-components";

import { IColorsProps } from "../../../context/color_theme/color_themes";
import { MEDIA_LARGE_LAPTOP, MEDIA_MOBILE } from "../../consts/media_vars";

export const StyledContentWrapper = styled.div<IColorsProps>(({ $colors }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: `1px solid ${$colors.thinBorder}`,
  borderRadius: "12px",
  marginTop: "48px",
  padding: "24px",
  gap: "24px",
  flexWrap: "wrap",
  [MEDIA_MOBILE]: {
    marginTop: "28px",
    padding: "14px",
    gap: "14px",
  },
}));

export const StyledContentWrapperTitleContainer = styled.div({
  display: "flex",
  alignItems: "flex-start",
  width: "100%",
});

export const StyledContentWrapperCardsContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  flexWrap: "wrap",
  gap: "24px",
  [MEDIA_MOBILE]: {
    gap: "14px",
  },
});

export const StyledContentWrapperTitle = styled.h3<IColorsProps>(
  ({ $colors }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    padding: "10px 24px",
    marginTop: "-49px",
    backgroundColor: $colors.colorfulItem,
    color: $colors.mainText,
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "150%",
    [MEDIA_LARGE_LAPTOP]: {
      padding: "8px 20px",
      marginTop: "-44px",
      fontSize: "16px",
    },
    [MEDIA_MOBILE]: {
      padding: "6px 16px",
      marginTop: "-30px",
      fontSize: "14px",
      lineHeight: "20px",
    },
  }),
);
