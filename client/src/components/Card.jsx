import React, { useEffect, useState } from "react";
import { getPokemonDetails } from "../axios/fetchApi";

function Card({ url }) {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    getPokemonDetails(url, (data) => setDetail(data));
  }, [url]);

  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-4">
      <ul>
        <li>ID: {detail.id}</li>
        <li>NAME: {detail.name}</li>
        <li>TYPE: {detail.types?.map((tipe, index) => {
            return index < detail.types.length - 1
              ? tipe.type.name + ", "
              : tipe.type.name;
          })}
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default Card;
