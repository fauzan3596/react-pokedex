import React, { useEffect, useState } from "react";
import { getPokemonDetails } from "../axios/fetchApi";
import { Image, Row, Col, Card } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import pokeballImg from "../assets/pokeball.svg";

function CardPokemon({ url, onBookmarkUpdate }) {
  const [detail, setDetail] = useState({});
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
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
  useEffect(() => {
    getPokemonDetails(url, (data) => {
      setDetail(data);
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
      setIsBookmarked(bookmarks.some((item) => item.id === data.id));
    });
  }, [url]);
  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter(
        (item) => item.id !== detail.id
      );
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
      if (onBookmarkUpdate) onBookmarkUpdate();
    } else {
      bookmarks.push({
        id: detail.id,
        name: detail.name,
        base_experience: detail.base_experience,
        height: detail.height,
        weight: detail.weight,
        types: detail.types,
        abilities: detail.abilities,
        sprites: detail.sprites,
      });
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
    setIsBookmarked(!isBookmarked);
    setIsClicked(true);
  };

  const handleAnimationEnd = () => {
    setIsClicked(false);
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
            // style={{background: 'radial-gradient(48.13% 48.05% at 50% 50%, rgba(206, 66, 101, 0.50) 0%, rgba(231, 67, 71, 0.00) 100%)'}}
          />
        </div>
        <div className="card-pokemon-badge">#{detail.id}</div>
        <div
          className="info d-flex justify-content-between align-items-start pt-4"
          style={{ height: "100px" }}
        >
          <h5>
            <b className="text-capitalize">{detail.name}</b>
          </h5>
          <div
            className={`card-pokemon-bookmark ${
              isClicked ? "icon-animation" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              toggleBookmark();
            }}
            onAnimationEnd={handleAnimationEnd}
            style={{ cursor: "pointer" }}
          >
            {isBookmarked ? <FaBookmark color="gold" /> : <FaRegBookmark />}
            <span style={{ marginLeft: "10px" }}></span>
          </div>
          <div>
            {detail.types?.map((tipe, index) => {
              console.log(tipe)
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
