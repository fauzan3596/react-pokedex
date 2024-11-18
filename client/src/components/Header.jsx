import React from "react";
import headerImg from "../assets/header-image.jpg"

function Header() {
  return (
    <header
      className="d-flex bg-primary flex-column justify-content-center align-items-center text-center text-white position-relative"
      style={{
        background: `url(${headerImg}) center/cover no-repeat`,
        height: "88vh",
      }}
    >
      <div
        className="overlay h-100 w-100 z-1 position-absolute top-0 start-0 z-1"
        style={{
          backgroundColor: "rgba(0, 0, 0, .55)",
        }}
      ></div>
      <div className="z-2 w-50">
        <h1 className="mb-3">Your Ultimate Guide to the World of Pokémon</h1>
        <p className="mb-5 fs-4 lead">
          Explore Every Region, Discover Every Species, and Catch Them All on
          Your Journey to Become a True Trainer!
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-7 col-sm-8 col-12">
            <button className="btn btn-info btn-lg w-100 rounded-pill fw-semibold">
              Explore Now
            </button>
          </div>
        </div>
      </div>
      
    </header>
  );
}

export default Header;