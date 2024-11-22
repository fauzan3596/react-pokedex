import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPokemonsBySearch } from "../axios/fetchApi";
import { Row, Col } from "react-bootstrap";
import CardPokemon from "../components/CardPokemon";
import LoadingSpinner from "../components/loadingSpinner";
import ErrorPage from "./ErrorPage";
import pokeballIcon from "../assets/pokeball.svg";
import PaginationPage from "../components/PaginationPage";

function SearchPage() {
  const location = useLocation();
  const query = location.state.query || {};
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 18;
  const [itemOffset, setItemOffset] = useState(0);
  const [paginatedPokemon, setPaginatedPokemon] = useState([]);

  useEffect(() => {
    getPokemonsBySearch((data) => {
      setPokemons(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const filteredData = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemons(filteredData);
    setItemOffset(0);
  }, [pokemons, query]);

  const totalPokemon = filteredPokemons.length;
  const totalPage = Math.ceil(totalPokemon / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const paginatedData = filteredPokemons.slice(
      itemOffset,
      itemOffset + itemsPerPage
    );
    setPaginatedPokemon(paginatedData);
  }, [itemOffset, filteredPokemons]);

  return (
    <section className="container-fluid">
      {totalPokemon === 0 ? (
        <ErrorPage query={query} type="search" />
      ) : loading ? (
        <LoadingSpinner loading={loading} />
      ) : (
        <>
          <Col md={10} className="mx-auto">
            <Row>
              <h2 className="py-3">Search results for "{query}" pokemons</h2>
              {totalPokemon > itemsPerPage ? (
                <Row className="py-3 m-0">
                  <Col md={12}>
                    <PaginationPage
                      totalPage={totalPage}
                      handlePageClick={handlePageClick}
                    />
                  </Col>
                </Row>
              ) : (
                ""
              )}
              <Row>
                <Col md={12}>
                  <h6>
                    <img
                      src={pokeballIcon}
                      alt="Pokeball Image"
                      height={25}
                      className="me-2 mb-1"
                    />
                    Found{" "}
                    {totalPokemon > itemsPerPage ? (
                      <>
                        <b>
                          {itemOffset + 1} to{" "}
                          {itemOffset + 18 <= totalPokemon
                            ? itemOffset + 18
                            : totalPokemon}
                        </b>{" "}
                        from total “{totalPokemon}” Pokémons
                      </>
                    ) : (
                      <span>total “{totalPokemon}” Pokémons</span>
                    )}
                  </h6>
                </Col>
              </Row>
              {paginatedPokemon.map((pokemon, i) => (
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
