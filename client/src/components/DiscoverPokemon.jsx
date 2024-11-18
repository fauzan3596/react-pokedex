import React, { useEffect, useState } from "react";
import { getPokemons, getTypes } from "../axios/fetchApi";
import CardPokemon from "./CardPokemon";
import { Container, Row } from "react-bootstrap";

function DiscoverPokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getPokemons((data) => setPokemons(data));
    getTypes((data) => setTypes(data));
  }, []);

  console.log(types)

  return (
    <div>
      <h2>Discover Pokémon</h2>
      <Container>
        <Row>
          {pokemons.map((pokemon, i) => (
            <CardPokemon url={pokemon.url} key={i} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default DiscoverPokemon;
