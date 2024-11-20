import React, { useEffect, useState } from "react";
import { getPokemons, getTypes } from "../axios/fetchApi";
import CardPokemon from "./CardPokemon";
import { Container, Row } from "react-bootstrap";
import LoadingSpinner from "./loadingSpinner";

function DiscoverPokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getPokemons((data) => {
      setPokemons(data);
      setLoading(false);
    });
    getTypes((data) => setTypes(data));
  }, []);

  console.log(types);

  return (
    <section>
      <h2>Discover Pokémon</h2>
      {loading ? (
        <LoadingSpinner loading={loading} />
      ) : (
        <Container>
          <Row>
            {pokemons.map((pokemon, i) => (
              <CardPokemon url={pokemon.url} key={i} />
            ))}
          </Row>
        </Container>
      )}
    </section>
  );
}

export default DiscoverPokemon;
