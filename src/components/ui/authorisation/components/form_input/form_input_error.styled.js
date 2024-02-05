import styled from "styled-components";
import { MEDIA_MOBILE } from "../../../../consts/media_vars";
export const StyledFormInputError = styled.span({
    fontSize: "13px",
    color: "#F44336",
    position: "absolute",
    top: 47,
    right: 1,
    textAlign: "end",
    [MEDIA_MOBILE]: {
        fontSize: "11px",
        top: 44,
    },
});
