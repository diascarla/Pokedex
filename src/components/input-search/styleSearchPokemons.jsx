import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
`

export const InputSearch = styled.input`
    border: none;
    border-radius: 12px;
    padding-inline: 1.5rem;
    font-size: 1.25rem;
    height: 45px;
    box-shadoow: 4px 4px 8px #00000020;
    transition: 1s;
    width: 0%;

    &:hover{
        background-color: var(--card);
        border: 1px solid #ddd;
        width: 30%;
    }
`

export const ButtonSearch = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    font-weight: 600;
    border-radius: 12px;
    background: transparent;
    transition: 0.4s;
    cursor: pointer;
    margin: 30px;
    font-size: 35px;

    &:hover {
        transform: scale(1.1);
        opacity: 0.9;
    }
`


