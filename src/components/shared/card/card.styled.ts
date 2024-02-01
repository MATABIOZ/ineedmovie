import { Link } from "react-router-dom";
import styled from "styled-components";

import { IColorsProps, Theme } from "../../../context/color_theme/color_themes";
import { MEDIA_LARGE_LAPTOP } from "../../consts/media_vars";

interface IStyledCardLinkProps {
  $isActive: boolean;
}
export const StyledCardLink = styled(Link).attrs<IStyledCardLinkProps>(
  ({ $isActive }) => ({
    style: {
      cursor: $isActive ? "pointer" : "grab",
    },
  }),
)({
  maxWidth: "300px",
  width: "100%",
});

export const StyledCardWrapper = styled.div.attrs<IColorsProps>(
  ({ $colors }) => ({
    style: {
      background: $colors.activeItemBackground,
      border: `1px solid ${$colors.thinBorder}`,
    },
  }),
)({
  display: "flex",
  flexDirection: "column",
  maxWidth: "300px",
  width: "100%",
  height: "500px",
  padding: "16px",
  borderRadius: "12px",
  textAlign: "center",
  [MEDIA_LARGE_LAPTOP]: {
    borderRadius: "10px",
  },
});

interface IStyledCardPosterProps {
  $backgroundLink: string;
  $colors: Theme;
}

export const StyledCardPoster = styled.div.attrs<IStyledCardPosterProps>(
  ({ $backgroundLink, $colors }) => ({
    style: {
      background: `url(${$backgroundLink}) center / cover no-repeat`,
      border: `1px solid ${$colors.thinBorder}`,
    },
  }),
)({
  width: "100%",
  height: "350px",
  borderRadius: "12px",
  position: "relative",
  [MEDIA_LARGE_LAPTOP]: {
    borderRadius: "10px",
  },
});

export const StyledCardTitle = styled.h3.attrs<IColorsProps>(({ $colors }) => ({
  style: {
    color: $colors.mainText,
  },
}))({
  display: "flex",
  justifyContent: "center",
  paddingTop: "16px",
  flex: 1,
  fontWeight: 600,
  fontSize: "18px",
});

export const StyledCardInfo = styled.div({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});
