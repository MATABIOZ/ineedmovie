import { styled } from "styled-components";
import { MEDIA_MOBILE } from "../../../../consts/media_vars";
export const StyledFormLabelTitle = styled.label(({ $colors }) => ({
    color: $colors.subText,
    fontSize: "22px",
    fontWeight: 600,
    lineHeight: "150%",
    cursor: "pointer",
    textAlign: "center",
    [MEDIA_MOBILE]: {
        fontSize: "18px",
    },
}));
