import React, { FC, useState } from "react";

import { getTheme, GetThemeType, ThemeType } from "./color_themes";

type IColorThemeContext = {
  themeType: ThemeType;
  setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>;
  getTheme: GetThemeType;
};

export const ColorThemeContext = React.createContext<IColorThemeContext>(
  {} as IColorThemeContext,
);

interface IColorThemeContextProviderProps {
  children: React.ReactNode;
}

export const ColorThemeContextProvider: FC<IColorThemeContextProviderProps> = ({
  children,
}) => {
  const [themeType, setThemeType] = useState<ThemeType>("dark");

  return (
    <ColorThemeContext.Provider
      value={{
        themeType: themeType,
        setThemeType: setThemeType,
        getTheme: getTheme,
      }}
    >
      {children}
    </ColorThemeContext.Provider>
  );
};
