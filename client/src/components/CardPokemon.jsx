import React, { useEffect, useState } from "react";
import { getPokemonDetails } from "../axios/fetchApi";
import { Image, Row, Col, Card } from "react-bootstrap";

function CardPokemon({ url }) {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    getPokemonDetails(url, (data) => setDetail(data));
  }, [url]);

  return (
    <>
      <Col key={detail.id} md={4}>
        <button href={`detail/${detail.id}`} className="card-pokemon w-100">
          <div className="image">
            <Image
              className="card-pokemon-img w-100"
              variant="top"
              src={detail.sprites?.other.home.front_default}
            />
          </div>
          <div>#{detail.id}</div>
          <div className="info d-flex justify-content-between align-items-start">
            <h4>
              <b>{detail.name}</b>
            </h4>
            <div>
              {detail.types?.map((tipe, index) => {
                return (
                  <>
                    <Image
                      width="25px"
                      src={`/types/icons/${tipe.type.name}.svg`}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </button>
      </Col>
    </>
  );
}

export default CardPokemon;
