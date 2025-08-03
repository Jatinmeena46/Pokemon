import React, { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";
const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=64";
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      // console.log(data);

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        // console.log(data);

        return data;
      });

      const detailedResponses = await Promise.all(detailedPokemonData);
      console.log(detailedResponses);
      // console.log(detailedPokemonData)
      setPokemon(detailedResponses);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchData = pokemon.filter((curPokemon)=>curPokemon.name.toLowerCase().includes(search.toLowerCase()))

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <section className="p-6 min-h-screen ">

        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-600">pokemon</h1>
        </header>

        <div className="flex justify-center m-6">
          <input
          type="text"
          placeholder="search Pokemon"
           value={search}
           onChange={(e)=>setSearch(e.target.value)}
           className="px-4 py-2 focus:outline-none border border-gray-300 rounded shadow w-72 "
           />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">

            {searchData.map((currPokemon) => {
              return (
                <PokemonCards key={currPokemon.id} pokemonData={currPokemon} />
              );
            })}

        </div>
      </section>
    </>
  );
};

export default Pokemon;
