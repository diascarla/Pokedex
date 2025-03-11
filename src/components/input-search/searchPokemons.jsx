import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Form, InputSearch, ButtonSearch } from "./styleSearchPokemons"
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

export function SearchPokemons({ search, setSearch, pokemonType }) {
    const { modeTheme } = useContext(ThemeContext)

    return (
        <Form onSubmit={pokemonType}
            style={{background: modeTheme.background, hover: modeTheme.hover }}>

            <InputSearch type="text" placeholder="Buscar Pokemons" value={search} onChange={(e) => setSearch(e.target.value)} style={{ color: modeTheme.color, background: modeTheme.background, hover: modeTheme.hover }}/>

            <ButtonSearch type="submit" 
            style={{ color: modeTheme.color, hover: modeTheme.hover }}> <IoIosSearch/> </ButtonSearch>
        </Form >
    )
}