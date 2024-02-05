import styled from "styled-components";
import { MEDIA_LARGE_LAPTOP, MEDIA_MOBILE, } from "../../../../consts/media_vars";
export const StyledFormMainTitle = styled.h1(({ $colors }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: $colors.mainBackground,
    border: `1px solid ${$colors.thinBorder}`,
    borderRadius: "8px",
    padding: "12px 24px",
    fontFamily: "Sora",
    fontWeight: 700,
    fontSize: "30px",
    color: $colors.mainText,
    textAlign: "center",
    [MEDIA_LARGE_LAPTOP]: {
        fontSize: "25px",
    },
    [MEDIA_MOBILE]: {
        fontSize: "20px",
    },
}));
