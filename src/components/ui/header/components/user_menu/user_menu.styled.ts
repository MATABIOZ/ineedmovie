import { styled } from "styled-components";

import { IColorsProps } from "../../../../../context/color_theme/color_themes";
import {
  MEDIA_LARGE_LAPTOP,
  MEDIA_MOBILE,
} from "../../../../consts/media_vars";

export const StyledUserMenuContainer = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  padding: "14px 32px",
  width: "100%",
  position: "absolute",
  right: 0,
  zIndex: 2,
  [MEDIA_MOBILE]: {
    justifyContent: "center",
  },
});

export const StyledUserMenuWrapper = styled.div<IColorsProps>(
  ({ $colors }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px",
    border: `1px solid ${$colors.thickBorder}`,
    borderRadius: 12,
    background: $colors.itemBackground,
    gap: 14,
    maxWidth: 300,
    flex: 1,
  }),
);

export const StyledUserMenuNavButton = styled.button<IColorsProps>(
  ({ $colors }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: $colors.colorfulItem,
    borderRadius: "8px",
    padding: "12px 24px",
    fontFamily: "Sora",
    fontWeight: 700,
    fontSize: "20px",
    color: $colors.mainText,
    textAlign: "center",
    minWidth: "150px",
    [MEDIA_LARGE_LAPTOP]: {
      fontSize: "20px",
    },
    [MEDIA_MOBILE]: {
      fontSize: "15px",
    },
  }),
);
