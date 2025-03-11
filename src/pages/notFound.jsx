import pokemonError from "../assets/error404.png"

export const NotFound = () => {
    return(
        <div>
            <h1>Not Found</h1>
            <img src={pokemonError} alt="" />
        </div>
    )
}