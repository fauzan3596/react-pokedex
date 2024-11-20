import React, { useEffect, useState } from "react";
import { Container, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { getPokemons, getTypes } from "../axios/fetchApi";
import CardPokemon from "../components/CardPokemon";
import axios from "axios";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  console.log(pokemons.length)

  useEffect(() => {
    getPokemons((data) => setPokemons(data));
    getTypes((data) => setTypes(data));
  }, []);

  const handleList = async (url) => {
    if(url != 'all'){
      try {
        const filter = await axios({
          method: "GET",
          url: url,
        });
        // console.log(filter.data.pokemon)
        // data
        setPokemons(filter.data.pokemon);
        console.log(pokemons)
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log(pokemons.length)


  return (
    <>
      <Container>
        <Row className="mt-4 pt-4">
          <Col md={2}>
            <Card className="card-pokemon w-100 p-0">
              <ListGroup>
              {/* <ListGroup defaultActiveKey="#All"> */}
                <ListGroup.Item action onClick={() => handleList('all')} style={{border:'none'}}>
                  <Image width="25px" className="" src={`/pokeball-fill.svg`} style={{marginRight:'10px'}} />
                  All
                </ListGroup.Item>
                {types.map((type, i) => {
                  if(i < 18){
                    return( 
                      <>
                        <ListGroup.Item className="" action onClick={() => handleList(type.url)} style={{border:'none'}}>
                          <Image width="25px" className="" src={`/types/icons/${type.name}.svg`} style={{marginRight:'10px'}} />
                          {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                        </ListGroup.Item>
                      </>
                    )
                  }
                })}
              </ListGroup>
            </Card>
          </Col>
          <Col md={10}>
            <Row>
              {pokemons.map((pokemon, i) => (
                <Col md={4}>
                  <CardPokemon url={pokemon.url} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Pokedex