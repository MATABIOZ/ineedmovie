import { styled } from "styled-components";

import { Theme } from "../../../context/color_theme/color_themes";

interface IStyledVoteAverageProps {
  $ratingBorderColor: string;
  $colors: Theme;
}

export const StyledVoteAverage = styled.span.attrs<IStyledVoteAverageProps>(
  ({ $colors, $ratingBorderColor }) => ({
    style: {
      background: $colors.itemBackground,
      border: `2px solid ${$ratingBorderColor}`,
      color: $colors.mainText,
    },
  }),
)({
  display: "flex",
  alignItems: "center",
  padding: "6px",

  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: 500,
  "& > svg": {
    fontSize: "18px",
  },
});
