import { createContext, useState, useEffect } from "react"

export const themes = {
    light: {
        hover: "#ffffff",
        backgroundOpacity: "rgba(255, 255, 255, 0.8)",
    },
    dark: {
        color: "#fff",
        background: "#232323",
        backgroundCard: "#454A54",
        hover: "#000000",
        backgroundOpacity: "rgba(255, 255, 255, 0.3)",
    }
}

export const ThemeContext = createContext({})

function saveTheme(){
    const theme = localStorage.getItem('modeTheme')
    return theme ? JSON.parse(theme) : { mode : themes.light }
}

export const ThemeProvider = (props) => {
    const [ modeTheme, setModeTheme ] = useState(saveTheme)
    
  useEffect(() => {
    localStorage.setItem('modeTheme', JSON.stringify(modeTheme) || {})
  }, [modeTheme])

    return (
        <ThemeContext.Provider value={{modeTheme, setModeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
