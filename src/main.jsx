import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// async function getPokemons(id) {
//     const [pokemons, setPokemons] = useState()

    // axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //     (response => {const pokemon = response.data
    //     setPokemons(prevPokemons => ({ ...prevPokemons, [id]: pokemon }))
    // })

//     const arrayPokemons = () => Array(20).fill().map((_, index) => getPokemons(index + 1))

//     useEffect(() => {
//         arrayPokemons()
//     }, [])

//     console.log('deu certo', pokemons)
// }


// <div className="container">
//     <h1>POKEDEX</h1>

//     <ul>
//         {
//             Object.values(pokemons).map(({ id, name, types }) => (
//                 <li className={`card ${types[0].type.name}`}>
//                     <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={name} />
//                     <h2>{id}.{name}</h2>
//                     <p>{types.map((item) => item.type.name).join(" || ")}</p>
//                 </li>)
//             )}
//     </ul>
// </div>
