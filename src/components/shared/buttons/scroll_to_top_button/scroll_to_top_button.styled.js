import styled from "styled-components";
export const StyledScrollToTopButton = styled.button(({ $colors, $isVisible }) => ({
    display: $isVisible ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px",
    margin: 0,
    background: $colors.colorfulItem,
    border: `1px solid ${$colors.thinBorder}`,
    borderTopLeftRadius: "8px",
    position: "fixed",
    bottom: 0,
    right: 0,
    zIndex: 2,
    "& > svg": {
        color: $colors.mainText,
        fontSize: "22px",
    },
}));
