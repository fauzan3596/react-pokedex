import React, { useEffect, useState } from "react";
import { getPokemons } from "../axios/fetchApi";
import Card from "./Card";

function DiscoverPokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons((data) => setPokemons(data));
  }, []);

  return (
    <div>
      <h1>Discover Pokémon</h1>
      <ul>
        <div className="row m-0 row-cols-3">
        {pokemons.map((pokemon, i) => (
          <Card url={pokemon.url} key={i} />
        ))}
        </div>
      </ul>
    </div>
  );
}

export default DiscoverPokemon;
