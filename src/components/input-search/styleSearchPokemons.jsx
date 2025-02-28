import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
`

export const InputSearch = styled.input`
    background-color: var(--card);
    border: 1px solid #ddd;
    border-radius: 12px;
    padding: 14px;
    flex: .4;
    font-size: 16px;
    box-shadoow: 4px 4px 8px #00000020;
`

export const ButtonSearch = styled.button`
    width: 50px;
    height: 50px;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadoow: 4px 4px 8px #00000020;
    transition: 0.4s;
    cursor: pointer;
    margin: 30px;
    font-size: 15px;

    &:hover {
        transform: scale(1.1);
        opacity: 0.9;
    }
`

