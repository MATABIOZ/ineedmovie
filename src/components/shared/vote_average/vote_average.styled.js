import { styled } from "styled-components";
export const StyledVoteAverage = styled.span.attrs(({ $colors, $ratingBorderColor }) => ({
    style: {
        background: $colors.itemBackground,
        border: `2px solid ${$ratingBorderColor}`,
        color: $colors.mainText,
    },
}))({
    display: "flex",
    alignItems: "center",
    padding: "6px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: 500,
    gap: "2px",
    "& > svg": {
        fontSize: "18px",
    },
});
