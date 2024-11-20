import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { getPokemons } from "../axios/fetchApi";
import CardPokemon from "../components/CardPokemon";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons((data) => setPokemons(data));
  }, []);
  return (
    <>
      <Container>
        <Row className="pt-4">
          <Col md={2}>
          <ListGroup defaultActiveKey="#All">
            <ListGroup.Item action href="#All">
              All
            </ListGroup.Item>
          </ListGroup>
          </Col>
          <Col md={10}>
            <Row>
              {pokemons.map((pokemon, i) => (
                <Col key={i} md={4}>
                  <CardPokemon url={pokemon.url} key={i} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Pokedex