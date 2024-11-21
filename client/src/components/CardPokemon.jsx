import React, { useEffect, useState } from "react";
import { getPokemonDetails } from "../axios/fetchApi";
import { Image, Row, Col, Card } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import pokeballImg from "../assets/pokeball.svg";

function CardPokemon({ url }) {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    getPokemonDetails(url, (data) => setDetail(data));
  }, [url]);

  const getPokemonImage = () => {
    if (detail.sprites?.other.home.front_default) {
      return detail.sprites?.other.home.front_default;
    } else if (detail.sprites?.other["official-artwork"].front_default) {
      return detail.sprites?.other["official-artwork"].front_default;
    } else {
      return pokeballImg;
    }
  };

  return (
    <>
      <Card
        as="a"
        href={`detail/${detail.name}`}
        className="card-pokemon w-100"
      >
        <div className="image">
          <Image
            className="card-pokemon-img w-100"
            variant="top"
            src={getPokemonImage()}
          />
        </div>
        <div className="card-pokemon-badge">#{detail.id}</div>
        <div className="info d-flex justify-content-between align-items-start">
          <h4>
            <b>{detail.name}</b>
          </h4>
          <div className="card-pokemon-bookmark">
            <FaRegBookmark />
            <span style={{ marginLeft: "10px" }}></span>
          </div>
          <div>
            {detail.types?.map((tipe, index) => {
              return (
                <Image
                  width="25px"
                  src={`/types/icons/${tipe.type.name}.svg`}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </Card>
    </>
  );
}

export default CardPokemon;
