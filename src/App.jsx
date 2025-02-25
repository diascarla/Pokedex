import { createGlobalStyle } from "styled-components";
import Home from "./pages/home";
// import { CreateRoutes } from "./pages/routers"; 

// import { ThemeTogglerButton } from "../../src/components/Theme-toggler-button"
// import { ThemeProvider } from "../../src/contexts/theme";



function App() {

  return (
    <>
    <GlobalStyle /> 
    <Home />
    {/* <CreateRoutes /> */}

    {/* <ThemeProvider />
        <ThemeTogglerButton />
      <ThemeProvider /> */}

    </>
  );
}

const GlobalStyle = createGlobalStyle`
  *{
    marin: 0;
    padding: 0;
  }
`

export default App;

