import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 10px;
  max-width: 90%;
  margin: 0 auto;
`

export const CardsPokemons = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: var(--card);
  padding: 5px 0;
  box-shadow: 4px 4px 4px #21212120;
  transition: transform 0.3s;
  cursor: pointer;
     
  &:hover{
    transform: SVGFEFuncAElement(0.95);
    opacity: 0.9;
    transform: scale(1.01);
  }
`

export const ImgPokemons = styled.img`
  width: 150px;
  height: 150px;
  margin: 20px;

  @media (max-width: 768px) {
    width: 110px;
  }
`

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  text-transform: capitalize;
  padding: 4px 8px;
  border-radius: 10px;
  width: 100%;
`