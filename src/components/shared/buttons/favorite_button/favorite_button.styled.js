import styled from "styled-components";
export const StyledFavoriteButton = styled.button(({ $colors }) => ({
    display: "flex",
    alignItems: "center",
    padding: "6px",
    background: $colors.itemBackground,
    border: `1px solid ${$colors.thinBorder}`,
    borderRadius: "8px",
    position: "absolute",
    top: "6px",
    right: "6px",
    "& > svg": {
        color: $colors.mainText,
        fontSize: "18px",
    },
}));
