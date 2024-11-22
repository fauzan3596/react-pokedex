import React from "react";
import headerImg from "../assets/pokeverse-background.png";
import headLine from "../assets/pokeverse-headline.svg";
import tagLine from "../assets/pokeverse-tagline.svg";
import pika from "../assets/pika.png";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap"

function Header() {
  return (
    <>
      <header
        className="d-flex flex-column  align-items-center text-center"
        style={{
          background: `url(${headerImg}) center/cover no-repeat`,
          // height: "70vh",
          // fontFamily: "Montserrat"
        }}
      >
        <Row>
          <Col md={12}>
            <img
              src={headLine}
              width={'100%'}
              style={{ marginTop: '200px', marginBottom: '200px' }}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: '-130px', backgroundColor:''}}>
          <Col md={3}></Col>
          <Col md={2} className="d-flex flex-column align-items-center text-center">
            <img
              src={tagLine}
              style={{ width: '500px', marginTop: '150px' }}
            />
            <br />
            <Link to="/pokedex">
              <button className="btn btn-lg rounded-pill fw-semibold mt-4 p-4 pt-2 pb-2" style={{ background: '#1D1D1D', color: 'white' }}>
                Explore Now
              </button>
            </Link>
          </Col>
          <Col md={6}>
            <img
              src={pika}
              className=""
              style={{ width: '70%',marginTop: '' }}
            />
          </Col>
        </Row>
      </header>
    </>
  );
}

export default Header;
