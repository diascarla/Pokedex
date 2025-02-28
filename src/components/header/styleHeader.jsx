import styled from "styled-components";

export const DivHeader = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    height: 200px;
    background-color: yellow;
    box-shadow: 4px 4px 8px #00000020;
    justify-content: space-around;

    @media (max-width: 1024px) {
        gap: 500px;
    }

    @media (max-width: 768px) {
        gap: 200px;
    }
`

export const ImgLogo = styled.img`
    width: 400px;
    transition: transform 0.3s;
    cursor: pointer;
  
    &:hover {
        transform: scale(1.1);
        opacity: 0.9;
    }

    @media (max-width: 768px) {
        width: 150px;
    }
`