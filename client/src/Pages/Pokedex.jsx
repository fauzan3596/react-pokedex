import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { getPokemons, getTypes } from "../axios/fetchApi";
import CardPokemon from "../components/CardPokemon";
import axios from "axios";
import PaginationPage from "../components/PaginationPage";
import pokeballIcon from "../assets/pokeball.svg";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const itemsPerPage = 18;
  const [itemOffset, setItemOffset] = useState(0);
  const [forcePage, setForcePage] = useState(0);
  const [filteredCount, setFilteredCount] = useState(1302);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const totalPage = Math.ceil(filteredCount / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    const newForcePage = event.selected;
    setItemOffset(newOffset);
    setForcePage(newForcePage);
  };

  const handleList = async (url) => {
    try {
      setItemOffset(0);
      setForcePage(0);
      const filter = await axios({
        method: "GET",
        url: url,
      });
      if (url != "all") {
        const filteredData = filter.data.pokemon;
        setFilteredCount(filteredData.length);
        setPokemons(filteredData.slice(0, itemsPerPage));
        setFilteredPokemon(filteredData);
      } else {
        setFilteredCount(1302);
        getPokemons({ offset: 0, limit: itemsPerPage }, (data) =>
          setPokemons(data)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (filteredCount === 1302) {
      getPokemons({ offset: itemOffset, limit: itemsPerPage }, (data) =>
        setPokemons(data)
      );
    } else {
      const paginatedPokemon = filteredPokemon.slice(
        itemOffset,
        itemOffset + itemsPerPage
      );
      setPokemons(paginatedPokemon);
    }
  }, [itemOffset, filteredPokemon]);

  useEffect(() => {
    getTypes((data) => setTypes(data));
  }, []);

  return (
    <>
      <Container fluid="md">
        <Row className="mt-4 pt-4 mb-4">
          <Col md={12}>
            <PaginationPage
              totalPage={totalPage}
              handlePageClick={handlePageClick}
              forcePage={forcePage}
            />
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <div className=" w-100 p-0">
              <ListGroup>
                {/* <ListGroup defaultActiveKey="#All"> */}
                <ListGroup.Item
                  action
                  onClick={() => handleList("all")}
                  style={{ border: "none" }}
                  onMouseOver={({ target }) => {
                    target.style.transform = "scale(1.1)";
                    target.style.cursor = "pointer";
                  }}
                  onMouseOut={({ target }) => {
                    target.style.transform = "scale(1)";
                    target.style.cursor = "default";
                  }}
                >
                  <Image
                    width="25px"
                    className=""
                    src={`/pokeball-fill.svg`}
                    style={{ marginRight: "10px" }}
                  />
                  All
                </ListGroup.Item>
                {types.map((type, i) => {
                  if (i < 18) {
                    return (
                      <ListGroup.Item
                        key={i}
                        className=""
                        action
                        onClick={() => handleList(type.url)}
                        style={{ border: "none" }}
                        onMouseOver={({ target }) => {
                          target.style.transform = "scale(1.1)";
                          target.style.cursor = "pointer";
                        }}
                        onMouseOut={({ target }) => {
                          target.style.transform = "scale(1)";
                          target.style.cursor = "default";
                        }}
                      >
                        <Image
                          width="25px"
                          className=""
                          src={`/types/icons/${type.name}.svg`}
                          style={{ marginRight: "10px" }}
                        />
                        {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                      </ListGroup.Item>
                    );
                  }
                })}
              </ListGroup>
            </div>
          </Col>
          <Col md={10}>
            <Row>
              <Col md={12}>
                <h6>
                  <img
                    src={pokeballIcon}
                    alt="Pokeball Image"
                    height={25}
                    className="me-2 mb-1"
                  />
                  <b>
                    {itemOffset + 1} to {itemOffset + 18 <= filteredCount ? itemOffset + 18 : filteredCount}
                  </b>{" "}
                  from total “{filteredCount}” Pokémons
                </h6>
              </Col>
            </Row>
            <Row>
              {pokemons?.map((pokemon, i) => (
                <Col md={4} key={i}>
                  <CardPokemon url={pokemon.url || pokemon.pokemon?.url} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={12}>
            <PaginationPage
              totalPage={totalPage}
              handlePageClick={handlePageClick}
              forcePage={forcePage}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Pokedex;
