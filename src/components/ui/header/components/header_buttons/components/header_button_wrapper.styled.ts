import styled from "styled-components";

import { Theme } from "../../../../../../context/color_theme/color_themes";
import {
  MEDIA_LARGE_LAPTOP,
  MEDIA_MOBILE,
} from "../../../../../consts/media_vars";

interface IStyledHeaderButtonProps {
  $colors: Theme;
  $searchButtonDisabled?: boolean;
}

export const StyledHeaderButton = styled.button<IStyledHeaderButtonProps>(
  ({ $colors, $searchButtonDisabled }) => ({
    opacity: $searchButtonDisabled ? 0.5 : 1,
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
