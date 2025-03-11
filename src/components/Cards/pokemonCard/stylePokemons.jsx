import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  max-width: 100%;
  margin: 0 auto;
`

export const CardsPokemons = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: var(--card);
  padding: 5px 0;
  box-shadow: 4px 4px 4px #21212120;
  transition: transform 0.3s;

  &:hover{
    transform: scale(1.01);
    cursor: pointer;
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
  text-transform: capitalize;
  padding: 4px 8px;
  border-radius: 10px;
  width: 100%;
  font-weight: 800;
  font-size: 1.2rem;
`

export const Type = styled.p`
  color: #615e5e;
  padding-top: 5px;
  transition: top 1s;
  font-size: 1rem;
`
