import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPokemonsBySearch } from "../axios/fetchApi";
import { Row, Col } from "react-bootstrap";
import CardPokemon from "../components/CardPokemon";
import LoadingSpinner from "../components/loadingSpinner";
import ErrorPage from "./ErrorPage";

function SearchPage() {
  const location = useLocation();
  const query = location.state.query || {};
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemonsBySearch((data) => {
      setPokemons(data);
      setLoading(false);
    });
    const filteredData = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemons(filteredData);
  }, [pokemons, query]);

  return (
    <section className="container-fluid">
      {filteredPokemons.length === 0 ? (
        <ErrorPage query={query} type="search" />
      ) : loading ? (
        <LoadingSpinner loading={loading} />
      ) : (
        <>
          <h2 className="py-3 mx-3">
            Found {filteredPokemons.length} results for "{query}" pokemons
          </h2>
          <Col md={10} className="mx-auto">
            <Row>
              {filteredPokemons.map((pokemon, i) => (
                <Col md={4} key={i}>
                  <CardPokemon url={pokemon.url} />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      )}
    </section>
  );
}

export default SearchPage;
