import styled from "styled-components";
import { MEDIA_LARGE_LAPTOP, MEDIA_MOBILE, } from "../../../../../consts/media_vars";
export const StyledHeaderButton = styled.button(({ $colors, $searchButtonDisabled, $isUserButton, $isUser }) => ({
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
}));
