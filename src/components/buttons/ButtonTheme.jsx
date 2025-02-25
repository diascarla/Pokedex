import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme"
import moonIcon from "../../assets/moon.png"
import sunIcon from "../../assets/sun.png"
import styled from "styled-components"

export const ButtonTheme = () => {
    const  { theme, setTheme } = useContext( ThemeContext );

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light)
    }

    return(
        <Button onClick={toggleTheme}>
          <Img src={theme === themes.light ? moonIcon : sunIcon} alt="theme icon" />
        </Button>
    )
}

// Botão

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`