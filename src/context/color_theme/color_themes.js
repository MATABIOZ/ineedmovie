var DarkColors;
(function (DarkColors) {
    DarkColors["MAIN_BACKGROUND"] = "#141414";
    DarkColors["MAIN_ITEM"] = "#FFF";
    DarkColors["ITEM_BACKGROUND"] = "#0F0F0F";
    DarkColors["EMPTY_ITEM_BACKGROUND"] = "#333";
    DarkColors["ACTIVE_ITEM_BACKGROUND"] = "#1A1A1A";
    DarkColors["COLORFUL_ITEM"] = "#E50000";
    DarkColors["THICK_BORDER"] = "#1F1F1F";
    DarkColors["THIN_BORDER"] = "#262626";
    DarkColors["MAIN_TEXT"] = "#FFF";
    DarkColors["SECONDARY_TEXT"] = "#BFBFBF";
    DarkColors["SUBTEXT"] = "#999";
})(DarkColors || (DarkColors = {}));
var LightColors;
(function (LightColors) {
    LightColors["MAIN_BACKGROUND"] = "#F0F0F0";
    LightColors["MAIN_ITEM"] = "#333";
    LightColors["ITEM_BACKGROUND"] = "#E0E0E0";
    LightColors["EMPTY_ITEM_BACKGROUND"] = "#E0E0E0";
    LightColors["ACTIVE_ITEM_BACKGROUND"] = "#C0C0C0";
    LightColors["COLORFUL_ITEM"] = "#3399CC";
    LightColors["THICK_BORDER"] = "#D8D8D8";
    LightColors["THIN_BORDER"] = "#CCC";
    LightColors["MAIN_TEXT"] = "#333";
    LightColors["SECONDARY_TEXT"] = "#666";
    LightColors["SUBTEXT"] = "#666";
})(LightColors || (LightColors = {}));
export const getTheme = (themeType) => {
    return {
        mainBackground: themeType === "dark"
            ? DarkColors.MAIN_BACKGROUND
            : LightColors.MAIN_BACKGROUND,
        mainItem: themeType === "dark" ? DarkColors.MAIN_ITEM : LightColors.MAIN_ITEM,
        itemBackground: themeType === "dark"
            ? DarkColors.ITEM_BACKGROUND
            : LightColors.ITEM_BACKGROUND,
        emptyItemBackground: themeType === "dark"
            ? DarkColors.EMPTY_ITEM_BACKGROUND
            : LightColors.EMPTY_ITEM_BACKGROUND,
        activeItemBackground: themeType === "dark"
            ? DarkColors.ACTIVE_ITEM_BACKGROUND
            : LightColors.ACTIVE_ITEM_BACKGROUND,
        colorfulItem: themeType === "dark"
            ? DarkColors.COLORFUL_ITEM
            : LightColors.COLORFUL_ITEM,
        thickBorder: themeType === "dark" ? DarkColors.THICK_BORDER : LightColors.THICK_BORDER,
        thinBorder: themeType === "dark" ? DarkColors.THIN_BORDER : LightColors.THIN_BORDER,
        mainText: themeType === "dark" ? DarkColors.MAIN_TEXT : LightColors.MAIN_TEXT,
        secondaryText: themeType === "dark"
            ? DarkColors.SECONDARY_TEXT
            : LightColors.SECONDARY_TEXT,
        subText: themeType === "dark" ? DarkColors.SUBTEXT : LightColors.SUBTEXT,
    };
};
