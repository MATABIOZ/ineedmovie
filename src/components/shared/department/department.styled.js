import { styled } from "styled-components";
export const StyledDepartment = styled.span.attrs(({ $colors }) => ({
    style: {
        background: $colors.itemBackground,
        border: `1px solid ${$colors.thinBorder}`,
        color: $colors.mainText,
    },
}))({
    display: "flex",
    alignItems: "center",
    padding: "6px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: 500,
    gap: "4px",
    "& > svg": {
        fontSize: "18px",
        opacity: 0.5,
    },
});
