import styled from "styled-components"

const LoadingPage = () => <Div></Div>

export default LoadingPage

const Div = styled.div`
    border: 5px solid #e2e2e2;
    border-radius: 50%;
    border-top-color: #26e;
    border-right-color: #26e;
    height: 1.5rem;
    width: 1.5rem;
    animation: spiner 1s linear infinite;
    grid-column: 1 / 6;
    margin: 0 auto;

    @keyframes: spiner{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`