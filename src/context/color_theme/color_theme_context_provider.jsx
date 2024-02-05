import React, { useState } from "react";
import { getTheme } from "./color_themes";
export const ColorThemeContext = React.createContext({});
export const ColorThemeContextProvider = ({ children, }) => {
    const [themeType, setThemeType] = useState("dark");
    return (<ColorThemeContext.Provider value={{
            themeType: themeType,
            setThemeType: setThemeType,
            getTheme: getTheme,
        }}>
      {children}
    </ColorThemeContext.Provider>);
};
