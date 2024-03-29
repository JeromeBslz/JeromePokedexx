import React from "react";

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

function PokemonCard() {
    const pokemon = pokemonList[0]; 

    let content;

    if (pokemon.imgSrc) { 
        content = <img src={pokemon.imgSrc} />;
    } else {
        content = <p> ??? </p>
    }

    return (
        <figure>
            {content}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

export default PokemonCard;