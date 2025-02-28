import logo from "../../assets/pokedex-logo.png";
import { ButtonToggleTheme } from "../buttons/theme-toggler-button/theme-toggler-button";
import { DivHeader, ImgLogo } from "./styleHeader"
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

export const Header = () => {
  const { modeTheme } = useContext(ThemeContext)

  return (
    <DivHeader style={{ background: modeTheme.background, hover: modeTheme.hover }}>
      
      <ImgLogo src={logo} alt="logo pokemon" title="logo pokemon" />

      <ButtonToggleTheme />

    </DivHeader>
  )
}