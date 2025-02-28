import { useContext } from "react"
import moonIcon from "../../../assets/moon.png"
import sunIcon from "../../../assets/sun.png"
import { ThemeContext, themes } from "../../../contexts/themeContext"
import { Button } from "../../buttons/ButtonTheme"
import { Img } from "./styleTheme-toggler-button"

export const ButtonToggleTheme = () => {
  const { modeTheme, setModeTheme } = useContext(ThemeContext);

  return (
    <div>   
      <Button onClick={() => setModeTheme(modeTheme === themes.light ? themes.dark : themes.light)}>
        <Img src={modeTheme === themes.light ? sunIcon : moonIcon } alt="theme icon" />
      </Button>
    </div>
  )
} 

