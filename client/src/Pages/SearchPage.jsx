import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPokemonsBySearch } from "../axios/fetchApi";
import { Row, Col } from "react-bootstrap";
import CardPokemon from "../components/CardPokemon";
import LoadingSpinner from "../components/loadingSpinner";

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
      <h2 className="py-3 mx-3">Found {filteredPokemons.length} results for "{query}" pokemons</h2>
      {
        filteredPokemons.length === 0 && <p>There's no pokemon with that keywords</p>
      }
      {loading ? (
        <LoadingSpinner loading={loading} />
      ) : (
        <Col md={10} className="mx-auto">
            <Row>
              {filteredPokemons.map((pokemon, i) => (
                <Col md={4}>
                  <CardPokemon url={pokemon.url} />
                </Col>
              ))}
            </Row>
          </Col>
      )}
    </section>
  );
}

export default SearchPage;
