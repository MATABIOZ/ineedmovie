import { Field } from "formik";
import styled from "styled-components";

import {
  IColorsProps,
  Theme,
} from "../../../../../context/color_theme/color_themes";
import { MEDIA_MOBILE } from "../../../../consts/media_vars";

export const StyledInputContainer = styled.div<IColorsProps>(({ $colors }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  position: "relative",
  maxWidth: "600px",
  width: "100%",
}));

interface IStyledInputProps {
  $inputId: "login" | "email" | "password" | "confirm_password";
  $colors: Theme;
}

export const StyledInput = styled(Field)<IStyledInputProps>(
  ({ $inputId, $colors }) => ({
    width: "100%",
    padding:
      $inputId === "password" || $inputId === "confirm_password"
        ? "12px 48px 12px 24px"
        : "12px 24px",
    backgroundColor: $colors.mainBackground,
    border: `1px solid ${$colors.thinBorder}`,
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "150%",
    color: $colors.mainText,
    "&::placeholder": {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "150%",
      color: $colors.subText,
    },
    [MEDIA_MOBILE]: {
      fontSize: "14px",
      "&::placeholder": {
        fontSize: "14px",
      },
    },
  }),
);
