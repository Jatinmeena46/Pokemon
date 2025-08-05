import React from "react";

const PokemonCards = ({ pokemonData }) => {
  return (
    <div className="bg-gray-900 rounded-2xl shadow-md p-4 text-center hover:scale-105 transition-all duration-200">
      <figure className="flex justify-center">
        <img
          className="h-28 w-28 object-contain"
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
        />
      </figure>

      <h2 className="capitalize text-xl font-semibold mt-4 text-gray-800">
        {pokemonData.name}
      </h2>

      <div className="mt-2">
        <p className="text-sm text-gray-500">
          {pokemonData.types.map((currType) => currType.type.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default PokemonCards;
