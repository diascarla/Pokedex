import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root{
    --back: #fff;
    --card: #eee;
    --text: #111;
  }  

  *{
    marin: 0;
    padding: 0;
    box-sizind: border-box;
  }

  body{
    font-size: 14px;
    font-family: 'Shantell sans', cursive;
    background-color: var(--back);
    color: var(--text);
    transition: background-color 0.3s, 
    color 0.3s;
  }

  ul, li {
    list-style: none;
  }
`