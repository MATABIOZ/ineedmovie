import styled from "styled-components";
export const StyledApp = styled.div(({ $colors }) => ({
    backgroundColor: $colors.mainBackground,
    color: $colors.mainText,
    minWidth: "100%",
    minHeight: "100vh",
    padding: "0 16px",
    position: "relative",
}));
