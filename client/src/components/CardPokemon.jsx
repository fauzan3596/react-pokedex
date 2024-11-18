import React, { useEffect, useState } from "react";
import { getPokemonDetails } from "../axios/fetchApi";
import { Image, Row, Col, Card } from 'react-bootstrap'

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
            <Card.Text  className="d-flex justify-content-between align-items-start">
              <div>
                #{detail.id}
                <h3><b>{detail.name}</b></h3>
              </div>
              <div>
              {detail.types?.map((tipe, index) => {
                return (
                  <>
                    <Image width="50px" src={`/types/icons/${tipe.type.name}.png`} ></Image>
                  </>
                )
              })}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default CardPokemon;