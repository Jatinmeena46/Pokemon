import React from "react";

const PokemonCards = ({ pokemonData }) => {
  return (
    <li className="pokemon-cards">
      <figure>
        <img 
        className=""
        src={pokemonData.sprites.other.dream_world.front_default}
         alt={pokemonData.name} />
      </figure>
      <h1>{pokemonData.name}</h1>
      <div>
        <p>
            {
               pokemonData.types.map((currType)=>{(currType.type.name)}).join(", ") 
            }
        </p>
      </div>
    </li>
  );
};

export default PokemonCards;
