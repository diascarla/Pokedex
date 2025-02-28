import styled from "styled-components";

export const Button = (props) => {

  return(
    <ButtonTheme {...props} />
  )
}

const ButtonTheme = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  transition: transform 3s;

  &:hover {
    transform: SVGFEFuncAElement(0.95);
    opacity: 0.9;
    transform: scale(1.01);
  }
`

