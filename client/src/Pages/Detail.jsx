import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Spinner,
  Alert,
  Card,
  Button,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Detail.css";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const [details, setDetails] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weaknesses, setWeaknesses] = useState([]);
  const [abilitiesDetails, setAbilitiesDetails] = useState([]);
  const [showMoveModal, setShowMoveModal] = useState(false);
  const [selectedMove, setSelectedMove] = useState(null);
  const { name } = useParams();
  const typeEffectiveness = {
    fire: ["water", "rock", "ground"],
    water: ["electric", "grass"],
    grass: ["fire", "ice", "poison", "flying", "bug"],
    electric: ["ground"],
    ground: ["water", "ice", "grass", "flying"],
  };

  const fetchDetails = async (name) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}/`
      );
      setDetails(response.data);

      const pokemonTypes = response.data.types.map(
        (typeObj) => typeObj.type.name
      );
      const calculatedWeaknesses = pokemonTypes
        .map((type) => typeEffectiveness[type] || [])
        .flat()
        .filter((value, index, self) => self.indexOf(value) === index);

      setWeaknesses(calculatedWeaknesses);

      const abilities = response.data.abilities;
      const abilitiesInfo = await Promise.all(
        abilities.map(async (abilityObj) => {
          const abilityResponse = await axios.get(abilityObj.ability.url);
          return abilityResponse.data;
        })
      );
      setAbilitiesDetails(abilitiesInfo);

      const speciesResponse = await axios.get(response.data.species.url);
      const evolutionChainUrl = speciesResponse.data.evolution_chain.url;

      const evolutionResponse = await axios.get(evolutionChainUrl);
      const chain = evolutionResponse.data.chain;

      const evolutions = [];
      let current = chain;
      while (current) {
        evolutions.push(current);
        current = current.evolves_to[0];
      }
      setEvolutionChain(evolutions);
    } catch (err) {
      setError(err.response?.data?.message || "Data not found");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (name) {
      fetchDetails(name);
    }
  }, [name]);

  const handleMoveClick = async (moveUrl) => {
    try {
      const response = await axios.get(moveUrl);
      setSelectedMove(response.data);
      setShowMoveModal(true);
    } catch (err) {
      setError("Move details not found");
    }
  };

  const closeModal = () => setShowMoveModal(false);

  const getTypeIcon = (typeName) => {
    return `/types/icons/${typeName}.svg`; // Pastikan ikon tipe tersedia di folder `/types/icons`
  };

  return (
    <Container style={{ padding: "20px" }}>
      {loading && (
        <div className="spinner-container">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {error && (
        <Alert variant="danger" className="alert-container">
          {error}
        </Alert>
      )}

      {details && (
        <Card className="mt-4 shadow">
          <Row className="g-0">
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src={details.sprites?.other?.home?.front_default}
                alt={details.name}
                className="img-fluid"
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <h3 className="text-capitalize">{details.name}</h3>
                <p>
                  <strong>Height:</strong> {details.height} <br />
                  <strong>Weight:</strong> {details.weight}
                </p>
                <p>
                  <strong>Types:</strong>{" "}
                  {details.types.map((typeObj) => (
                    <img
                      key={typeObj.type.name}
                      src={getTypeIcon(typeObj.type.name)}
                      alt={typeObj.type.name}
                      width="30"
                      style={{ marginRight: "5px" }}
                    />
                  ))}
                </p>
                <p>
                  <strong>Abilities:</strong>{" "}
                  {details.abilities
                    .map((abilityObj) => abilityObj.ability.name)
                    .join(", ")}
                </p>
                <strong>Stats:</strong>
                <ul>
                  {details.stats.map((statObj) => (
                    <li key={statObj.stat.name}>
                      {statObj.stat.name}: {statObj.base_stat}
                    </li>
                  ))}
                </ul>
                <p>
                  <strong>Weaknesses:</strong>{" "}
                  {weaknesses.length > 0 ? weaknesses.join(", ") : "None"}
                </p>

                <div>
                  <h4>Moves:</h4>
                  {details.moves.slice(0, 5).map((moveObj) => (
                    <Button
                      key={moveObj.move.name}
                      onClick={() => handleMoveClick(moveObj.move.url)}
                      className="button-link"
                    >
                      {moveObj.move.name}
                    </Button>
                  ))}
                </div>

                <div>
                  <h4>Ability Details:</h4>
                  {abilitiesDetails.map((ability, index) => (
                    <Card key={index} className="mt-3">
                      <Card.Body>
                        <h5 className="text-capitalize">{ability.name}</h5>
                        <p>
                          <strong>Effect:</strong>{" "}
                          {
                            ability.effect_entries.find(
                              (entry) => entry.language.name === "en"
                            )?.effect
                          }
                        </p>
                        <p>
                          <strong>Generation:</strong> {ability.generation.name}
                        </p>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      )}

      {evolutionChain.length > 0 && (
        <div className="mt-4">
          <h3>Evolution Chain</h3>
          <Row>
            {evolutionChain.map((evolution, index) => (
              <Col
                key={index}
                md={4}
                className="mb-3 d-flex justify-content-center"
              >
                <Link to={`/detail/${evolution.species.name}`}>
                  <Card className="evolution-card">
                    <Card.Body>
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                          evolution.species.url.split("/")[6]
                        }.png`}
                        alt={evolution.species.name}
                      />
                      <p>{evolution.species.name}</p>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      )}

      <Modal show={showMoveModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedMove?.name}
            {selectedMove?.type && (
              <img
                src={`/types/icons/${selectedMove.type.name}.svg`}
                alt={selectedMove.type.name}
                style={{
                  width: "30px",
                  marginLeft: "10px",
                  verticalAlign: "middle",
                }}
              />
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMove && (
            <div>
              <p>
                <strong>Power:</strong> {selectedMove.power || "N/A"}
              </p>
              <p>
                <strong>Type:</strong> {selectedMove.type.name}{" "}
                <img
                  src={`/types/icons/${selectedMove.type.name}.svg`}
                  alt={selectedMove.type.name}
                  style={{
                    width: "25px",
                    marginLeft: "5px",
                    verticalAlign: "middle",
                  }}
                />
              </p>
              <p>
                <strong>PP:</strong> {selectedMove.pp}
              </p>
              <p>
                <strong>Effect:</strong>{" "}
                {selectedMove.effect_entries?.find(
                  (entry) => entry.language.name === "en"
                )?.effect || "No description available"}
              </p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Detail;
