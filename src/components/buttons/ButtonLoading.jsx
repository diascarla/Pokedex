import styled from "styled-components"
import usePokemons from "../hooks/usePokemons"

function LoadingButton() {
    const { getMorePokemons } = usePokemons()

    return (
        <DivContainer>
            <ButtonLoading onClick={getMorePokemons}>Carregar Mais</ButtonLoading>
        </DivContainer>
    )
}

const DivContainer = styled.div`
    display: flex;
    justify-content = center;
    width: 100%
    height: 150px;
`

const ButtonLoading = styled.button`
    display: flex;
    align-items: center;
    justify-content = center;
    width: 150px;
    height: 50px;
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 12px;
    font-size: 16px;
    box-shadoow: 4px solid #00000020;
`

export default LoadingButton