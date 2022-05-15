import React, { useState, createContext, useEffect } from "react";
import * as Font from "expo-font";

import { Themes, Colors } from "./main.style";

const ThemeContext = createContext({});

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(Themes.DarkMode);
    const [colors, setColors] = useState(Colors.DarkMode);

    return (
        <ThemeContext.Provider
            value={{
                theme, colors,
                setTheme, setColors
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
