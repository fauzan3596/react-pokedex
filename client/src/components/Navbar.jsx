import React from "react";
import pokeballImg from "../../public/logo.svg";
import orangeBall from "../assets/orange-pokeball.svg";
import { FaSearch } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navLinkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? "#4a1885" : "transparent",
  });

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top px-3"
      data-bs-theme="dark"
      style={{ backgroundColor: "#6523b6" }}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand mt-1" href="#">
          <img
            src={pokeballImg}
            className="mb-2 me-2"
            alt="Pokeball Image"
            height={25}
            // width={35}
          />
          {/* <h1 className="d-inline fs-4 text-white">PokéVerse</h1> */}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-2 me-auto mb-2 mb-lg-0 fw-semibold">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white rounded-pill px-3 me-2 position-relative"
                style={navLinkStyle}
                to="/"
              >
                Home
                {location.pathname === "/" && (
                  <img
                    src={orangeBall}
                    height={15}
                    className="position-absolute start-50 top-100 text-warning translate-middle"
                  />
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white rounded-pill px-3 me-2 position-relative"
                style={navLinkStyle}
                to="/pokedex"
              >
                PokéDex
                {location.pathname === "/pokedex" && (
                  <img
                    src={orangeBall}
                    height={15}
                    className="position-absolute start-50 top-100 text-warning translate-middle"
                  />
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white rounded-pill px-3 me-2 position-relative"
                style={navLinkStyle}
                to="/favorite"
              >
                Favorite
                {location.pathname === "/favorite" && (
                  <img
                    src={orangeBall}
                    height={15}
                    className="position-absolute start-50 top-100 text-warning translate-middle"
                  />
                )}
              </NavLink>
            </li>
          </ul>

          <form
            className="d-flex align-items-center position-relative"
            role="search"
          >
            <FaSearch className="position-absolute ms-3" />
            <input
              className="form-control me-2 border-0 rounded-pill ps-5 bg-white search-input"
              type="search"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
