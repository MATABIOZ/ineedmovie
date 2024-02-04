import styled from "styled-components";

import { IColorsProps } from "../../../../context/color_theme/color_themes";
import { MEDIA_LAPTOP, MEDIA_MOBILE } from "../../../consts/media_vars";

export const StyledMovieInfo = styled.div({
  display: "flex",
  width: "100%",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "14px",
});

export const StyledMovieInfoWrapper = styled.div<IColorsProps>(
  ({ $colors }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `1px solid ${$colors.thinBorder}`,
    background: $colors.activeItemBackground,
    borderRadius: "12px",
    padding: "14px",
    gap: "14px",
    flexWrap: "wrap",
    [MEDIA_LAPTOP]: {
      flexDirection: "column",
    },
  }),
);

export const StyledMovieTitle = styled.h3<IColorsProps>(({ $colors }) => ({
  color: $colors.subText,
  fontSize: "30px",
  fontWeight: 600,
  lineHeight: "150%",
  [MEDIA_MOBILE]: {
    fontSize: "24px",
  },
}));

export const StyledMovieItemsTitle = styled.h5<IColorsProps>(({ $colors }) => ({
  color: $colors.subText,
  fontWeight: 600,
  lineHeight: "150%",
  fontSize: "16px",
}));

export const StyledMovieText = styled.p<IColorsProps>(({ $colors }) => ({
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: "150%",
  color: $colors.mainText,
  textAlign: "center",
  margin: "14px 0",
  [MEDIA_MOBILE]: {
    fontSize: "16px",
  },
}));

export const StyledMovieItemsWrapper = styled.p({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "16px",
  alignItems: "center",
  wordWrap: "break-word",
});

export const StyledMovieItem = styled.span.attrs<IColorsProps>(
  ({ $colors }) => ({
    style: {
      background: $colors.itemBackground,
      border: `1px solid ${$colors.thinBorder}`,
      color: $colors.mainText,
    },
  }),
)({
  display: "flex",
  alignItems: "center",
  padding: "6px",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: 500,
  wordBreak: "break-word",
  textAlign: "center",
});

export const StyledMovieCastSwiperContainer = styled.div({
  width: "100%",
});
