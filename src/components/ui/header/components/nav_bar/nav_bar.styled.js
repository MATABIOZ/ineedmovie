import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MEDIA_LAPTOP, MEDIA_LARGE_LAPTOP, } from "../../../../consts/media_vars";
export const StyledNavBar = styled.div({
    display: "flex",
    width: "100%",
    justifyContent: "center",
    [MEDIA_LAPTOP]: {
        display: "none",
    },
});
export const StyledNavBarWrapper = styled.ul(({ $colors }) => ({
    display: "flex",
    padding: "10px 25px",
    border: `4px solid ${$colors.thickBorder}`,
    borderRadius: 12,
    background: $colors.itemBackground,
    gap: "14px",
    [MEDIA_LARGE_LAPTOP]: {
        padding: "8px 22px",
        border: `3px solid ${$colors.thickBorder}`,
    },
}));
export const StyledNavLink = styled(NavLink)(({ $colors, $isactive, $isFavorites, $favoritesIsUnlock }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px 24px",
    border: $isFavorites ? `1px solid ${$colors.thinBorder}` : "none",
    borderRadius: 8,
    backgroundColor: $isactive
        ? $colors.activeItemBackground
        : $colors.itemBackground,
    fontSize: 18,
    lineHeight: "25px",
    fontWeight: $isactive ? 500 : 400,
    color: $isactive ? $colors.mainText : $colors.secondaryText,
    cursor: $isFavorites && !$favoritesIsUnlock ? "no-drop" : "pointer",
    opacity: $isFavorites && !$favoritesIsUnlock ? 0.5 : 1,
    [MEDIA_LARGE_LAPTOP]: {
        padding: "12px 16px",
    },
}));
