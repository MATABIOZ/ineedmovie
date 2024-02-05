import styled from "styled-components";
import { MEDIA_MOBILE } from "../../../consts/media_vars";
export const StyledHeader = styled.header(({ $colors }) => ({
    width: "100%",
    padding: "24px 0",
    borderBottom: `1px solid ${$colors.thinBorder}`,
    borderRadius: 12,
    [MEDIA_MOBILE]: {
        padding: "40px 0 14px",
    },
}));
export const StyledHeaderWrapper = styled.div({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    "& > *": {
        flex: "1",
    },
    [MEDIA_MOBILE]: {
        flexDirection: "column",
    },
});
