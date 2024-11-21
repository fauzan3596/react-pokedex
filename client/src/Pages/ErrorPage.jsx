import React from "react";
import sadPikachuImg from "../assets/sad-pikachu.png";
import { Link } from "react-router-dom";

function ErrorPage({ type, query }) {
  const GetErrorContet = () => {
    switch (type) {
      case "search":
        return (
          <h4>Sorry, we couldn't find any results for "{query}" pokemons</h4>
        );
      case "favorite":
        return (
          <h4>
            You have no favorites pokemon yet. Please add some pokemon first
          </h4>
        );
      default:
        return (
          <>
            <h1>404 Not Found</h1>
            <h6 className="mb-4">Sorry this page does not exist</h6>
            <Link to="/">
              <button className="btn btn-primary">Go Back</button>
            </Link>
          </>
        );
    }
  };
  return (
    <section
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "88vh" }}
    >
      <img
        src={sadPikachuImg}
        alt="Sad Pikachu Image"
        height={250}
        className="mb-3"
      />
      <GetErrorContet />
    </section>
  );
}

export default ErrorPage;
