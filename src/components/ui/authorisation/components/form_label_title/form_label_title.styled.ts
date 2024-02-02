import { styled } from "styled-components";

import { IColorsProps } from "../../../../../context/color_theme/color_themes";
import { MEDIA_MOBILE } from "../../../../consts/media_vars";

export const StyledFormLabelTitle = styled.label<IColorsProps>(
  ({ $colors }) => ({
    color: $colors.subText,
    fontSize: "22px",
    fontWeight: 600,
    lineHeight: "150%",
    cursor: "pointer",
    textAlign: "center",
    [MEDIA_MOBILE]: {
      fontSize: "18px",
    },
  }),
);
