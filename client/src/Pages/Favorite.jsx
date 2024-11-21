import ErrorPage from './ErrorPage'
import React, { useState, useEffect } from "react";
import CardPokemon from "../components/CardPokemon";
import { Container, Row, Col } from "react-bootstrap";

function Favorites() {
  const [bookmarks, setbookmarks] = useState([]);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setbookmarks(bookmarks);
  }, [bookmarks]);

  return (
    <Container className="favorites-page mt-4">
      <h1>Favorite Pokémon</h1>
      {bookmarks.length > 0 ? (
        <Row>
          {bookmarks.map((pokemon, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <CardPokemon url={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`} />
            </Col>
          ))}
        </Row>
      ) : (
        <ErrorPage type="favorite" />
      )}
    </Container>
  );
}

export default Favorites;
