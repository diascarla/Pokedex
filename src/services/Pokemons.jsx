import './pokemons.css'
import styled from "styled-components";
import usePokemons from './hooks/usePokemons';
import InfiniteScroll from "react-infinite-scroll-component"
import LoadingPage from "../components/loadingPage/loading";
import DetailsPokemons from "./detailsPokemons/DetailsPokemons";
import { useState } from "react";
import SearchPokemons from '../components/header/input-search/SearchPokemons';

//import pokemonError from "../../src/assets/error404.png"
//import { Link } from "react-router-dom"


function Card({ name, img, type, verPokemon }) {

    return (
        <>
            {/* <Link to={"/details"}> */}
            <DivContainer onClick={verPokemon} >

                <ImgPokemons src={img} alt={name} />

                <DivInfo>
                    <p>{name}</p>
                    <p>{type}</p>
                </DivInfo>

            </DivContainer>
            {/* </Link> */}
        </>
    )

}

function Pokemons() {

    const { pokemons, getMorePokemons, setScroll, searchPokemon } = usePokemons()
    const [mostrar, setMostrar] = useState({ mostrar: false, pokemon: {} })
    const verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon })
    const naoVerPokemon = () => {
        setMostrar({ mostrar: false, pokemon: {} })
        setSearch('')
    }
    const [ search, setSearch ] = useState('')

    const pokemonType = async (e) => {
        e.preventDefault()

        if(!search) return

        const pokemon = await searchPokemon(search)

        setSearch({ mostrar: true, pokemon })
    }

    return (
        <>
            <DetailsPokemons {...mostrar} parar={naoVerPokemon} />

            <SearchPokemons search={search} setSearch={setSearch} pokemonType={pokemonType} />

            <InfiniteScroll className="pokemon-container"
                dataLength={pokemons.length}
                next={getMorePokemons}
                hasMore={setScroll}
                loader={<LoadingPage />}
                endMessage={
                    <h3>Não há mais pokemons para mostrar!</h3>
                }>

                {
                    pokemons.map(pokemon =>
                        <Card {...pokemon} key={pokemon.id} verPokemon={() => verPokemon(pokemon)} />
                    )
                }
            </InfiniteScroll>
        </>
    )
}

export default Pokemons

const DivContainer = styled.div`
    width: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    background-color: #f2f2f2;
    padding: 5px 0;
    box-shadow: 4px 4px 4px #21212120;
    transition: transform 0.3s;
     
    &:hover{
        transform: SVGFEFuncAElement(0.95);
        opacity: 0.9;
        transform: scale(1.01);
    }
`

const ImgPokemons = styled.img`
  width: 150px;
  height: 150px;
  margin: 20px;

  @media (max-width: 768px) {
    width: 110px;
  }
`

const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:transparent;
    color: black;
    font-weight: 600;
    text-transform: capitalize;
    padding: 4px 8px;
    border-radius: 10px;
    width: 100%;
`