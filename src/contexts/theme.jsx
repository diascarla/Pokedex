import { createContext, useState } from "react"

export const themes = {
    light: {
        color: '#000000',
        background: '#F0FFF0',
        cardBackground: '#d8e3ec'
        // color: "#111111",
        // background: "#eeeeee",
        // a: "#232333",
        // hover: "#ffffff",
        // backgroundOpacity: "rgba(255, 255, 255, 0.8)",
    },
    dark: {
        color: '#ffffff',
        background: '#000000',
        cardBackground: '#a8a8a8'
        // color: "#dddddd",
        // background: "#232323",
        // a: "#ffffff",
        // hover: "#000000",
        // backgroundOpacity: "rgba(255, 255, 255, 0.3)",
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [ theme, setTheme ] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
    