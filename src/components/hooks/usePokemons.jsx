import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const URL = `https://pokeapi.co/api/v2/pokemon/`;
const url_endPoint = `https://pokeapi.co/api/v2/pokemon/`;

function usePokemons() {

    const [pokemons, setPokemons] = useState([]);
    const [EndPoint, setEndPoint] = useState('');
    const [scroll, setScroll] = useState(true);
    const { id } = useParams();

    const fetchPokemon = async (url_endPoint) => {
        const response = await fetch(url_endPoint)
        const poke = await response.json()

        const abilities = poke.abilities.slice(0, 10).map(a => a.ability.name)

        const moves = poke.moves.slice(0, 10).map((move, key) => (
            <li key={key}>
                {move.move.name}
            </li>
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

    const getPokemons = async (url = URL) => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('404 NOT FOUND - Erro ao biscar Pokemons');
            }
            const pokemonsList = await response.json()
            const { next, results } = pokemonsList

            const newPokemons = await Promise.all(
                results.map((pokemon) => fetchPokemon(pokemon.url))
            )
            return { next, newPokemons }
    
        } catch (error) {
            console.error("Erro ao buscar dados do Pokemon:", error);
            return null;

        }
    }
    
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