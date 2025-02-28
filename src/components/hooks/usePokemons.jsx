import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";

const URL = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`
const url_endPoint = `https://pokeapi.co/api/v2/pokemon/`

function usePokemons() {

    const [pokemons, setPokemons] = useState([]);
    const [EndPoint, setEndPoint] = useState(''); // siguienteUrl
    const [ scroll, setScroll ] = useState(true)  // verMas - scroll infinito
    //const { id } = useParams();

    const fetchPokemon = async (url_endPoint) => {
            const response = await fetch(url_endPoint)
            const poke = await response.json()

            const abilities = poke.abilities.map((ability) => (
                <li key={ability.name}>
                  <strong>{ability.name}:</strong>
                </li>
              ))
            const moves = poke.moves.slice(0, 10).map((move) => (
                <li key={move.move.name}>{move.move.name}</li>
              ))
            const type = poke.types.map(t => t.type.name).join(" || ")

            return {
                id: poke.id,
                name: poke.name,
                type,
                moves,
                abilities,
                img: poke.sprites.other.dream_world.front_default || poke.sprites.front_default,    
            }
    }

    const getPokemons = async (url = URL ) => {
        
        const response = await fetch(url);
        const pokemonsList = await response.json()
        const { next, results } = pokemonsList

        const newPokemons = await Promise.all(
            results.map((pokemon) => fetchPokemon(pokemon.url))
        )          

        return { next, newPokemons }
    }
        //obterPokemons
    const morePokemons = async () => {
        const { next, newPokemons } = await getPokemons()
        setPokemons(newPokemons)
        setEndPoint(next)
    }

    const getMorePokemons = async () => {
        const { next, newPokemons } = await getPokemons(EndPoint)
        setPokemons(prev => [...prev, ...newPokemons])
        next == null && setScroll(false)
        setEndPoint(next)
    }

    const searchPokemon = async (search) => {
        const url = `${url_endPoint}${search.toLocaleLowerCase()}`
        return await fetchPokemon(url)
    }

    useEffect(() => {
        morePokemons()
    }, []);

    return { pokemons, getMorePokemons, setScroll, searchPokemon }

}

export default usePokemons