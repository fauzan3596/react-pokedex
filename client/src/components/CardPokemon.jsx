import React, { useEffect, useState } from "react";
import { getPokemonDetails } from "../axios/fetchApi";
import { Image, Col, Card } from 'react-bootstrap'

function CardPokemon({ url }) {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    getPokemonDetails(url, (data) => setDetail(data));
  }, [url]);
  

  return (
    <>
      <Col md={4}>
        <Card className="w-100 card-pokemon" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={detail.sprites?.other.home.front_default} />
          <Card.Body>
            <Card.Text>#{detail.id}</Card.Text>
            <Card.Title><b>{detail.name}</b></Card.Title>
            <div>
            {detail.types?.map((tipe, index) => {
              return (
                <>
                <Image src={`types/icons/${tipe.type.name}`} ></Image>
                {tipe.type.name}
                </>
              )
            })}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default CardPokemon;