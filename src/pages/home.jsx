import React from "react"
import Header from "../components/header/Header"
import Pokemons from "../services/Pokemons"

//import LoadingButton from "../components/Button/ButtonLoading"
// import ButtonTheme from "../components/Button/ButtonTheme"

function Home() {

    return (  
      <>
        <Header />
        <Pokemons/>
        
        {/* <LoadingButton/>       */}
      </>
        
    )
}

export default Home