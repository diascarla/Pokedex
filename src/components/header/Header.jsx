import styled from "styled-components";
import logo from "../../../src/assets/pokedex-logo.png";
import { ThemeProvider } from "../../contexts/theme";
import { ButtonTheme } from "../buttons/ButtonTheme";

const Header = () => {


  return (
      <DivHeader>
        <DivLogo>
          <ImgLogo src={logo} alt="logo pokemon" title="logo pokemon" />

        <ThemeProvider>
          <ButtonTheme/> 
        </ThemeProvider>

        </DivLogo>

      </DivHeader>
  )
}

export default Header

const DivHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 300px;
  background-color: yellow;
  box-shadow: 4px 4px 8px #00000020;

  @media (max-width: 1024px) {
    gap: 500px;
  }

  @media (max-width: 768px) {
    gap: 200px;
  }
`;

const DivLogo = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ImgLogo = styled.img`
  width: 400px;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const DivButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;