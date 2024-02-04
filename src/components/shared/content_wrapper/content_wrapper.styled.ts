import styled from "styled-components";

import { IColorsProps, Theme } from "../../../context/color_theme/color_themes";
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
  minHeight: "78vh",
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

export const StyledContentWrapperHeaderContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  paddingBottom: "24px",
  [MEDIA_MOBILE]: {
    paddingBottom: "14px",
  },
});

interface IStyledContentWrapperHeaderItemProps {
  $colors: Theme;
  $isTotalResults?: boolean;
}

export const StyledContentWrapperHeaderItem =
  styled.h3<IStyledContentWrapperHeaderItemProps>(
    ({ $colors, $isTotalResults }) => ({
      color: $isTotalResults ? $colors.secondaryText : $colors.mainText,
      fontSize: "38px",
      fontWeight: 700,
      lineHeight: "150%",
      [MEDIA_LARGE_LAPTOP]: {
        fontSize: "30px",
      },
      [MEDIA_MOBILE]: {
        fontSize: "24px",
      },
    }),
  );
