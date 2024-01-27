import styled from "styled-components";

import { IColorsProps } from "../../../../../../context/color_theme/color_themes";
import {
  MEDIA_LARGE_LAPTOP,
  MEDIA_MOBILE,
} from "../../../../../consts/media_vars";

export const StyledHeaderButton = styled.button<IColorsProps>(
  ({ $colors }) => ({
    "& > svg": {
      color: $colors.mainText,
      fontSize: 34,
      [MEDIA_LARGE_LAPTOP]: {
        fontSize: 25,
      },
      [MEDIA_MOBILE]: {
        fontSize: 23,
      },
    },
  }),
);
