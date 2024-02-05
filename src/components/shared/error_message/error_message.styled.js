import styled from "styled-components";
export const StyledErrorMessage = styled.h1(({ $colors }) => ({
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    fontSize: "50px",
    color: $colors.colorfulItem,
}));
