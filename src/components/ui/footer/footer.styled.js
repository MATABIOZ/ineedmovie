import { Link } from "react-router-dom";
import styled from "styled-components";
import { MEDIA_LARGE_LAPTOP, MEDIA_MOBILE } from "../../consts/media_vars";
export const StyledFooter = styled.footer({
    width: "100%",
    padding: "24px 0 10px",
    [MEDIA_MOBILE]: {
        padding: "14px 0 10px",
    },
});
export const StyledFooterWrapper = styled.div(({ $colors }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "32px",
    rowGap: "16px",
    borderTop: `1px solid ${$colors.thinBorder}`,
    borderRadius: 12,
    flexWrap: "wrap",
    paddingTop: "24px",
    [MEDIA_MOBILE]: {
        paddingTop: "14px",
    },
}));
export const StyledFooterItemContainer = styled.div({
    display: "flex",
    alignItems: "center",
    gap: "16px",
});
export const StyledFooterItemTitle = styled.h3(({ $colors }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    padding: "12px 0",
    fontFamily: "Sora",
    fontWeight: 700,
    fontSize: "25px",
    color: $colors.subText,
    textAlign: "center",
    [MEDIA_LARGE_LAPTOP]: {
        fontSize: "20px",
    },
    [MEDIA_MOBILE]: {
        fontSize: "15px",
    },
}));
export const StyledFooterItemLogoWrapper = styled(Link)({
    width: "50px",
    height: "50px",
    [MEDIA_LARGE_LAPTOP]: {
        width: "40px",
        height: "40px",
    },
    [MEDIA_MOBILE]: {
        width: "30px",
        height: "30px",
    },
});
export const StyledFooterItemLogoImg = styled.img({
    width: "100%",
    height: "100%",
});
export const StyledFooterItemLogoTextWrapper = styled(Link)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});
export const StyledFooterItemLogoText = styled.span(({ $colors }) => ({
    fontFamily: "'Pacifico', cursive",
    fontSize: "26px",
    color: $colors.mainText,
    paddingBottom: "9px",
    [MEDIA_LARGE_LAPTOP]: {
        fontSize: "21px",
        paddingBottom: "7px",
    },
    [MEDIA_MOBILE]: {
        fontSize: "17px",
        paddingBottom: "6px",
    },
}));
export const StyledFooterText = styled.p(({ $colors }) => ({
    width: "100%",
    color: $colors.subText,
    marginTop: "10px",
    paddingTop: "10px",
    borderTop: `1px solid ${$colors.thinBorder}`,
    fontSize: "15px",
    lineHeight: "150%",
    textAlign: "center",
    [MEDIA_MOBILE]: {
        fontSize: "13px",
        margin: 0,
    },
}));
