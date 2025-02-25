import styled from 'styled-components';
//import { Link } from 'react-router-dom'

function DetailsPokemons({ pokemon, mostrar, parar }) {

    return (
        <DivContainer onClick={parar} style={{display: mostrar ? 'grid' : 'none' }} >
            <Section >
                <DivImg>
                    <ImgPokemons src={pokemon.img} alt={pokemon.name} />
                </DivImg>
                <DivInfo>
                    <div>
                    <h2>{pokemon.name}</h2>
                    <h3>Tipo:</h3>
                        {pokemon.type}
                        
                    </div>
                    
                    <h3>Movimentos:</h3>
                    {pokemon.moves}
                    
                    <h3>Habilidades:</h3>
                    {/* {pokemon.abilities?.map(ability => <p>{ability}</p>) } 
                    */}
                    {pokemon.abilities}
                </DivInfo>

                {/* <Link to={"/"} >Voltar</Link> */}

            </Section>
        </DivContainer>
    )
}

export default DetailsPokemons

const DivContainer = styled.div`
// moda-container

    backgroud-color: rgba(0, 0, 0, 0.5);
    // position: fixed;
    position: absolut;
    width: 100vw;
    height: 100vh;
    trasition: all 0.6s;
    z-index: 1;
`

const Section = styled.section`
//modal-body

    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: 2rem;      
`

const DivImg = styled.div`
    display: flex;
    justify-content: center;


`

const ImgPokemons = styled.img`
  width: 500px;
  height: 250px;

  @media (max-width: 768px) {
    width: 110px;
  }
`

const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    // font-weight: 600;
    text-transform: capitalize;
    width: 100%;
`