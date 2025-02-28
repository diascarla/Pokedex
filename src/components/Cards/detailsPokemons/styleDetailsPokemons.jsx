import styled from "styled-components";

export const DivContainer = styled.div`
    backgroud-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    place-items: center;
    trasition: all 0.6s;
    z-index: 1;
`

export const Section = styled.section`
    background: var(--back);
    width: 60%;
    min-width: 400px;
    border-radius: 10px;
    height: 60vh;
    position: absolute; 
    padding: 1rem; 
    display: flex; 
    cursor: pointer; 

    &:hover{
      transform: SVGFEFuncAElement(0.95);
      opacity: 0.9;
      transform: scale(1.01);
    }  
`

export const DivImg = styled.div`
    align-content: center;
    width: 90%;
`

export const ImgPokemons = styled.img`
  width: 100%;
  height: 250px;

  @media (max-width: 768px) {
    width: 110px;
  }
`

export const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: capitalize;
    width: 100%;
`