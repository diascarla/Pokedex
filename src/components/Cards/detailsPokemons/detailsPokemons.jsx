import { useContext } from "react"
import { ThemeContext } from "../../../contexts/themeContext"
import { DivContainer, DivContainerDetails, Section, DivImg, ImgPokemons, DivInfo } from "./styleDetailsPokemons"

export function DetailsPokemons({ pokemon, mostrar, parar }) {
  const { modeTheme } = useContext(ThemeContext);

  return (
    <DivContainer onClick={parar} style={{ display: mostrar ? 'grid' : 'none' }} >
      <DivContainerDetails className='details'>
        <Section style={{ color: modeTheme.color, background: modeTheme.backgroundCard, hover: modeTheme.hover, backgroundOpacity: modeTheme.backgroundOpacity }}>
          <DivImg>
            <ImgPokemons src={pokemon.img} alt={pokemon.name} />
          </DivImg>
          <DivInfo>
            <div>

              <h1>{pokemon.name}</h1>
              <h3>Tipo:</h3>
              {pokemon.type}

            </div>

            <h3>Movimentos:</h3>
            {pokemon.moves}

            <h3>Habilidades:</h3>              
            {/* {pokemon.abilities} */}
            {pokemon.abilities?.map(abilities => <span>{abilities} : </span>)}
            
          </DivInfo>

          {/* <Link to={"/"} >Voltar</Link> */}

        </Section>
      </DivContainerDetails>
    </DivContainer>
  )
}


// //import { Link } from 'react-router-dom'
// import { useContext } from "react"
// import { ThemeContext } from "../../../contexts/themeContext"
// import { DivContainer, DivContainerDetails, Section, DivImg, ImgPokemons, DivInfo, } from "./styleDetailsPokemons"

// export function DetailsPokemons({ pokemon, mostrar, parar }) {
//   const { modeTheme } = useContext(ThemeContext)

//   return (
//     <DivContainer onClick={parar} style={{ display: mostrar ? 'grid' : 'none' }}>
//       <DivContainerDetails className='details'>
//         <Section style={{ color: modeTheme.color, background: modeTheme.backgroundCard, hover: modeTheme.hover, backgroundOpacity: modeTheme.backgroundOpacity }}>
//           <DivImg>
//             <ImgPokemons src={pokemon.img} alt={pokemon.name} />
//           </DivImg>
//           <DivInfo>
//             <div>

//               <h1>{pokemon.name}</h1>
//               <h3>Tipo:</h3>
//               {pokemon.type}

//             </div>

//             <h3>Movimentos:</h3>
//             {pokemon.moves}

//             <h3>Habilidades:</h3>              
//             {/* {pokemon.abilities} */}
//             {pokemon.abilities?.map(abilities => <span>{abilities} : </span>)}
            
//           </DivInfo>

//           {/* <Link to={"/"} >Voltar</Link> */}

//         </Section>
//       </DivContainerDetails>
//     </DivContainer>
//   )
// }
