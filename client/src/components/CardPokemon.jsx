import React, { useEffect, useState } from "react";
import { getPokemonDetails } from "../axios/fetchApi";
import { Image, Col } from 'react-bootstrap'

function CardPokemon({ url }) {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    getPokemonDetails(url, (data) => setDetail(data));
  }, [url]);
  

  return (
    <>
      <Col md={4}>
        <Image height={'300px'} src={detail.sprites?.other.home.front_default}></Image>
        <div>

        #{detail.id}
        {detail.name}
        TYPE: {detail.types?.map((tipe, index) => {
              return index < detail.types.length - 1
                ? tipe.type.name + ", "
                : tipe.type.name;
            })}
        </div>
      </Col>
    </>
  );
}

export default CardPokemon;