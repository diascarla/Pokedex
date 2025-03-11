import React from "react"
import { Header } from "../components/header/Header"
import Pokemons from "../components/Cards/pokemonCard/pokemons"
import { ThemeProvider } from "../contexts/themeContext"

//import LoadingButton from "../components/Button/ButtonLoading"

function Home() {

  return (

    <div>
      <ThemeProvider>
        <Header />
        <Pokemons />
      </ThemeProvider>
    </div>

  )
}

export default Home