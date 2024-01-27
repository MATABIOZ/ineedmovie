import styled from "styled-components";

import { IColorsProps, Theme } from "../../../context/color_theme/color_themes";
import {
  MEDIA_LAPTOP,
  MEDIA_LARGE_LAPTOP,
  MEDIA_MOBILE,
} from "../../consts/media_vars";

interface IStyledBannerWrapperProps {
  $backgroundLink: string;
  $colors: Theme;
}

export const StyledBannerWrapper = styled.div<IStyledBannerWrapperProps>(
  ({ $backgroundLink, $colors }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 24,
    width: "100%",
    height: 710,
    background: `linear-gradient(0deg, ${$colors.mainBackground} 0%, rgba(20, 20, 20, 0.00) 100%), url(${$backgroundLink}) center / cover no-repeat`,
    borderRadius: 12,
    border: `1px solid ${$colors.thinBorder}`,
    overflow: "hidden",
    [MEDIA_LAPTOP]: {
      height: 590,
    },
    [MEDIA_MOBILE]: {
      height: 468,
      marginTop: 14,
    },
  }),
);

export const StyledBannerInfoWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: 50,
  [MEDIA_LARGE_LAPTOP]: {
    padding: 40,
  },
  [MEDIA_LAPTOP]: {
    padding: 32,
  },
  [MEDIA_MOBILE]: {
    padding: 24,
  },
});

export const StyledBannerTitle = styled.h2<IColorsProps>(({ $colors }) => ({
  fontSize: 38,
  fontWeight: 700,
  lineHeight: "150%",
  color: $colors.mainText,
  [MEDIA_LARGE_LAPTOP]: {
    fontSize: 30,
  },
  [MEDIA_MOBILE]: {
    fontSize: 24,
    paddingBottom: 20,
  },
}));

export const StyledBannerOverview = styled.p<IColorsProps>(({ $colors }) => ({
  fontSize: 18,
  fontWeight: 500,
  lineHeight: "150%",
  color: $colors.subText,
  textAlign: "center",
  paddingBottom: 30,
  [MEDIA_LARGE_LAPTOP]: {
    fontSize: 16,
    paddingBottom: 24,
  },
  [MEDIA_LAPTOP]: {
    fontSize: 13,
  },
  [MEDIA_MOBILE]: {
    display: "none",
  },
}));
