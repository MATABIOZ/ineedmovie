import { styled } from "styled-components";

import {
  IColorsProps,
  Theme,
} from "../../../../../context/color_theme/color_themes";
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

export const StyledUserMenuActionButton = styled.button<IColorsProps>(
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
    [MEDIA_MOBILE]: {
      fontSize: "15px",
    },
  }),
);

interface IStyledUserMenuLoginProps {
  $colors: Theme;
  $textColor: string;
}

export const StyledUserMenuLogin = styled.h3<IStyledUserMenuLoginProps>(
  ({ $colors, $textColor }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: $colors.mainBackground,
    border: `1px solid ${$colors.thinBorder}`,
    borderRadius: "8px",
    padding: "12px 24px",
    fontFamily: "Sora",
    fontWeight: 700,
    fontSize: "30px",
    color: $textColor,
    textAlign: "center",
    width: "100%",
    gap: "4px",
    marginBottom: "14px",
    "& > svg": {
      fontSize: "30px",
    },
    [MEDIA_LARGE_LAPTOP]: {
      fontSize: "25px",
      "& > svg": {
        fontSize: "25px",
      },
    },
    [MEDIA_MOBILE]: {
      fontSize: "20px",
      "& > svg": {
        fontSize: "20px",
      },
    },
  }),
);
