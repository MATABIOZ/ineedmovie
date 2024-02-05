import styled from "styled-components";
import { MEDIA_LARGE_LAPTOP, MEDIA_MOBILE, } from "../../../../consts/media_vars";
export const StyledHeaderButtonsWrapper = styled.div({
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    gap: 30,
    [MEDIA_LARGE_LAPTOP]: {
        gap: 14,
    },
    [MEDIA_MOBILE]: {
        justifyContent: "space-between",
        padding: "0 16px",
    },
});
