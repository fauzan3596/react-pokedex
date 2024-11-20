import React, { useEffect, useState } from "react";
import { getPokemons, getTypes } from "../axios/fetchApi";
import CardPokemon from "./CardPokemon";
import { Container, Row, Col } from "react-bootstrap";
import LoadingSpinner from "./loadingSpinner";
import { Link } from "react-router-dom";

function DiscoverPokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [types, setTypes] = useState([]);

  useEffect(() => {
    getPokemons((data) => {
      setPokemons(data);
      setLoading(false);
    });
    // getTypes((data) => setTypes(data));
  }, []);

  return (
    <div>
      <h2 className="my-4 mx-3">Discover Your Pokémon</h2>
      {loading ? (
        <LoadingSpinner loading={loading} />
      ) : (
        <Container>
          <Row>
            {pokemons.slice(0, 6).map((pokemon, i) => (
              <Col key={i} md={4}>
                <CardPokemon url={pokemon.url} key={i} />
              </Col>
            ))}
          </Row>
          <div className="row d-flex justify-content-center mb-3">
            <div className="col-5">
              <Link to="/pokedex">
                <button className="btn btn-primary-subtle w-100 py-2 rounded-pill">
                  View All pokemons
                </button>
              </Link>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

export default DiscoverPokemon;
