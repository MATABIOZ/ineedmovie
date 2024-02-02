import styled from "styled-components";

import {
  IColorsProps,
  Theme,
} from "../../../../../context/color_theme/color_themes";
import {
  MEDIA_LARGE_LAPTOP,
  MEDIA_MOBILE,
} from "../../../../consts/media_vars";

export const StyledFormButtonsContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  padding: "24px 0 14px",
  maxWidth: "600px",
  width: "100%",
  gap: "14px",
  [MEDIA_MOBILE]: {
    padding: "14px 0",
  },
});

interface IStyledFormButtonProps {
  $colors: Theme;
  $isActive?: boolean;
  $buttonForSubmit: boolean;
}

export const StyledFormButton = styled.button<IStyledFormButtonProps>(
  ({ $colors, $isActive, $buttonForSubmit }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: $colors.colorfulItem,
    borderRadius: "8px",
    padding: "12px 24px",
    fontFamily: "Sora",
    fontWeight: 700,
    fontSize: "25px",
    color: $colors.mainText,
    textAlign: "center",
    opacity: $buttonForSubmit && !$isActive ? 0.7 : 1,
    cursor: $buttonForSubmit && !$isActive ? "no-drop" : "pointer",
    [MEDIA_LARGE_LAPTOP]: {
      fontSize: "20px",
    },
    [MEDIA_MOBILE]: {
      fontSize: "15px",
    },
  }),
);

export const StyledFormShowPasswordButton = styled.button<IColorsProps>(
  ({ $colors }) => ({
    display: "flex",
    alignItems: "center",
    color: $colors.subText,
    position: "absolute",
    top: "50%",
    right: "14px",
    transform: "translateY(-50%)",
    "& > svg": {
      fontSize: "20px",
      [MEDIA_MOBILE]: {
        fontSize: "18px",
      },
    },
  }),
);
