import styled from "styled-components";

import { IColorsProps } from "../../../context/color_theme/color_themes";
import { MEDIA_LARGE_LAPTOP, MEDIA_MOBILE } from "../../consts/media_vars";

export const StyledSwiperContainer = styled.div({
  display: "flex",
  flexWrap: "wrap",
});

export const StyledSwiperController = styled.div<IColorsProps>(
  ({ $colors }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: `1px solid ${$colors.thickBorder}`,
    borderRadius: "8px",
    margin: "14px 16px 0",
    padding: "10px",
    background: $colors.itemBackground,
    [MEDIA_LARGE_LAPTOP]: {
      padding: "8px",
    },
    [MEDIA_MOBILE]: {
      padding: "6px",
    },
    ".swiper-scrollbar": {
      position: "relative",
      display: "flex",
      width: "100%",
      background: $colors.thinBorder,
      borderRadius: "50px",
      margin: "0 12px",
      "&.swiper-scrollbar-horizontal": {
        height: "6px",
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto",
        [MEDIA_LARGE_LAPTOP]: {
          height: "5px",
        },
        [MEDIA_MOBILE]: {
          height: "4px",
        },
      },
    },
    ".swiper-scrollbar-drag": {
      background: $colors.colorfulItem,
      borderRadius: "50px",
      cursor: "pointer",
    },
    ".swiper-button-prev, .swiper-button-next": {
      display: "flex",
      border: `1px solid ${$colors.thickBorder}`,
      borderRadius: "8px",
      background: $colors.activeItemBackground,
      padding: "6px",
      [MEDIA_LARGE_LAPTOP]: {
        padding: "5px",
      },
      [MEDIA_MOBILE]: {
        padding: "4px",
      },
      "& > svg": {
        color: $colors.mainItem,
        fontSize: "28px",
        [MEDIA_LARGE_LAPTOP]: {
          fontSize: "24px",
        },
        [MEDIA_MOBILE]: {
          fontSize: "20px",
        },
      },
    },
  }),
);
