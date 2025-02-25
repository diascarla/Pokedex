import React from "react";
//import { IoIosSearch } from "react-icons/io";
//import styled from "styled-components";

function SearchPokemons({ search, setSearch, pokemonType}) {
    return(       
            <form onSubmit={pokemonType}>
                <input type="text" placeholder="Tipos" value={search} onChange={(e) => setSearch(e.target.value)}>
                   {/* <IoIosSearch type="submit"/> */}
                </input>
                <button type="submit">oi</button>
            </form >
    )
}

export default SearchPokemons


// const Section = styled.section`
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     padding: 5px 0;
// `

// const ButtonSearch = styled.button`
//     width: 400px;
//     background-color: #f2f2f2;
//     border: 1px solid #ddd;
//     border-radius: 10px;
//     padding: 12px;
//     flex: .4;
//     font-size: 16px;
//     box-shadoow: 4px 4px 8px #00000020;
//     disply: flex;
//     justify-content: space-around;
//     align-items: center;
//     cursor: pointer;
//     transition: 0.4s;

//         &:hover {
//         transform: scale(0.95);
//         opacity: 0.9;
//     }
// `

