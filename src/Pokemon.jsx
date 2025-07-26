import React, { useEffect, useState } from 'react'

const Pokemon = () => {
    const [pokemon,setPokemon] = useState([]);
    const API = "https://pokeapi.co/api/v2/pokemon?limit=24"
    const fetchPokemon = async () => {
        try {
            const res = await fetch(API)
            const data = await res.json();
            console.log(data);

            const detailedPokemonData = data.results.map( async (curPokemon)=>{
                // console.log(curPokemon.url)
                const res = await fetch(curPokemon.url)
                const data = await res.json()
                // console.log(data)
                return data;
            })
            // console.log(detailedPokemonData)
            const detailedResponses = await Promise.all(detailedPokemonData)
            console.log(detailedResponses)
            setPokemon(detailedResponses);
        } catch (error) {
            console.error("Error fetching Pokémon:", error); 
        }
    }

    useEffect(()=>{
        fetchPokemon();
    },[])


  return (
    <div>
      <h1>hello pokemon</h1>
    </div>
  )
}

export default Pokemon
