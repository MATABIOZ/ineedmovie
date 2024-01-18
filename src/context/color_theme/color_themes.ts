enum DarkColors {
  MAIN_BACKGROUND = "#141414",
  MAIN_ITEM = "#FFF",
  ITEM_BACKGROUND = "#0F0F0F",
  EMPTY_ITEM_BACKGROUND = "#333",
  ACTIVE_ITEM_BACKGROUND = "#1A1A1A",
  COLORFUL_ITEM = "#E50000",
  THICK_BORDER = "#1F1F1F",
  THIN_BORDER = "#262626",
  MAIN_TEXT = "#FFF",
  SECONDARY_TEXT = "#BFBFBF",
  SUBTEXT = "#999",
}

enum LightColors {
  MAIN_BACKGROUND = "#F0F0F0",
  MAIN_ITEM = "#333",
  ITEM_BACKGROUND = "#E0E0E0",
  EMPTY_ITEM_BACKGROUND = "#E0E0E0",
  ACTIVE_ITEM_BACKGROUND = "#C0C0C0",
  COLORFUL_ITEM = "#3399CC",
  THICK_BORDER = "#D8D8D8",
  THIN_BORDER = "#CCC",
  MAIN_TEXT = "#333",
  SECONDARY_TEXT = "#666",
  SUBTEXT = "#CCC",
}

export type ThemeType = "dark" | "light";

type ThemeKeysType =
  | "mainBackground"
  | "mainItem"
  | "itemBackground"
  | "emptyItemBackground"
  | "activeItemBackground"
  | "colorfulItem"
  | "thickBorder"
  | "thinBorder"
  | "mainText"
  | "secondaryText"
  | "subText";

export type Theme = Record<ThemeKeysType, DarkColors | LightColors>;

export interface IColorsProps {
  $colors: Theme;
}

export type GetThemeType = (themeType: ThemeType) => Theme;

export const getTheme: GetThemeType = (themeType) => {
  return {
    mainBackground:
      themeType === "dark"
        ? DarkColors.MAIN_BACKGROUND
        : LightColors.MAIN_BACKGROUND,
    mainItem:
      themeType === "dark" ? DarkColors.MAIN_ITEM : LightColors.MAIN_ITEM,
    itemBackground:
      themeType === "dark"
        ? DarkColors.ITEM_BACKGROUND
        : LightColors.ITEM_BACKGROUND,
    emptyItemBackground:
      themeType === "dark"
        ? DarkColors.EMPTY_ITEM_BACKGROUND
        : LightColors.EMPTY_ITEM_BACKGROUND,
    activeItemBackground:
      themeType === "dark"
        ? DarkColors.ACTIVE_ITEM_BACKGROUND
        : LightColors.ACTIVE_ITEM_BACKGROUND,
    colorfulItem:
      themeType === "dark"
        ? DarkColors.COLORFUL_ITEM
        : LightColors.COLORFUL_ITEM,
    thickBorder:
      themeType === "dark" ? DarkColors.THICK_BORDER : LightColors.THICK_BORDER,
    thinBorder:
      themeType === "dark" ? DarkColors.THIN_BORDER : LightColors.THIN_BORDER,
    mainText:
      themeType === "dark" ? DarkColors.MAIN_TEXT : LightColors.MAIN_TEXT,
    secondaryText:
      themeType === "dark"
        ? DarkColors.SECONDARY_TEXT
        : LightColors.SECONDARY_TEXT,
    subText: themeType === "dark" ? DarkColors.SUBTEXT : LightColors.SUBTEXT,
  };
};
