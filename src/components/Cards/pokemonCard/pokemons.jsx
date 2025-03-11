import { Section, CardsPokemons, ImgPokemons, DivInfo, Type } from './stylePokemons';
import usePokemons from '../../hooks/usePokemons';
import InfiniteScroll from "react-infinite-scroll-component"
import LoadingPage from "../../loadingMorePokemons/loading";
import { DetailsPokemons } from '../detailsPokemons/detailsPokemons';
import { SearchPokemons } from '../../input-search/searchPokemons';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../../contexts/themeContext';

//import { Link } from "react-router-dom"

function Card({ name, img, id, type, verPokemon }) {
    const { modeTheme } = useContext(ThemeContext)

    return (
        <>
            {/* <Link to={"/details"}> */}

            <CardsPokemons onClick={verPokemon}
                style={{ color: modeTheme.color, background: modeTheme.backgroundCard, color: modeTheme.color, hover: modeTheme.hover, backgroundOpacity: modeTheme.backgroundOpacity }}>

                <ImgPokemons src={img} alt={name} />

                <DivInfo>
                    <p>{id} . {name}</p>
                    <Type>{type}</Type>
                </DivInfo>

            </CardsPokemons>
            {/* </Link> */}
        </>
    )

}

function Pokemons() {
    const { modeTheme } = useContext(ThemeContext)

    const { pokemons, getMorePokemons, setScroll, searchPokemon } = usePokemons()
    const [mostrar, setMostrar] = useState({ mostrar: false, pokemon: {} })
    const [search, setSearch] = useState('') //buscada setBuscada

    const verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon })
    const naoVerPokemon = () => {
        setMostrar({ mostrar: false, pokemon: {} })
        setSearch('')
    }

    const pokemonType = async (e) => {
        e.preventDefault()

        if (!search) return

        const pokemon = await searchPokemon(search)

        setMostrar({ mostrar: true, pokemon })
    }

    return (
        <>
            <DetailsPokemons {...mostrar} parar={naoVerPokemon} />

            <SearchPokemons search={search} setSearch={setSearch} pokemonType={pokemonType} />

            <InfiniteScroll
            style={{ background: modeTheme.background }}
                className="pokemon-container"
                dataLength={pokemons.length}
                next={getMorePokemons}
                hasMore={setScroll}
                loader={<LoadingPage />}
                endMessage={
                    <h3>Não há mais pokemons para mostrar!</h3>
                }>

                <Section >
                    {
                        pokemons.map(pokemon =>
                            <Card {...pokemon} key={pokemon.id} verPokemon={() => verPokemon(pokemon)} />
                        )
                    }
                </Section>
            </InfiniteScroll>
        </>
    )
}

export default Pokemons