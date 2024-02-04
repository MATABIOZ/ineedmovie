import styled from "styled-components";

import { Theme } from "../../../../../../context/color_theme/color_themes";
import {
  MEDIA_LARGE_LAPTOP,
  MEDIA_MOBILE,
} from "../../../../../consts/media_vars";

interface IStyledHeaderButtonProps {
  $colors: Theme;
  $searchButtonDisabled?: boolean;
  $isUserButton?: boolean;
  $isUser?: boolean;
}

export const StyledHeaderButton = styled.button<IStyledHeaderButtonProps>(
  ({ $colors, $searchButtonDisabled, $isUserButton, $isUser }) => ({
    opacity: $searchButtonDisabled ? 0.5 : 1,
    cursor: $searchButtonDisabled ? "default" : "pointer",
    "& > svg": {
      color: $isUserButton && $isUser ? "#4CAF50" : $colors.mainText,
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
