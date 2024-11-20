import React, { useEffect, useState } from "react";
import { getPokemons, getTypes } from "../axios/fetchApi";
import CardPokemon from "./CardPokemon";
import { Container, Row, Col } from "react-bootstrap";

function DiscoverPokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons((data) => setPokemons(data));
  }, []);

  return (
    <div>
      {/* <h2>Discover Pokémon</h2> */}
      <Container>
        <Row>
          {pokemons.map((pokemon, i) => (
            <Col key={i} md={4}>
              <CardPokemon url={pokemon.url} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default DiscoverPokemon;
