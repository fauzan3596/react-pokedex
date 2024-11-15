import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [serverId, setServerId] = useState(null); 
  const [details, setDetails] = useState(null); 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 
  const fetchDetails = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      setDetails(response.data); 
      console.log(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Detail not found");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (serverId) {
      fetchDetails(serverId);
    }
  }, [serverId]);
  const handleButtonClick = (id) => {
    setServerId(id); 
  };

  return (
    <Container style={{ padding: "20px" }}>
      {/* Daftar Tombol Server */}
      <h1>Server List</h1>
      <ul>
        <li>
          <button onClick={() => handleButtonClick(1)}>Server 1</button>
        </li>
        <li>
          <button onClick={() => handleButtonClick(2)}>Server 2</button>
        </li>
        <li>
          <button onClick={() => handleButtonClick(3)}>Server 3</button>
        </li>
      </ul>
      
      <Container>
        {details && (
          <Row>
            <Col>
              <img
                src={details.sprites?.front_default}
                alt={details.name}
                style={{ maxWidth: "100px" }}
              />
            </Col>
            <Col>
              <h3>{details.name}</h3>
              <p>Height: {details.height}</p>
              <p>Weight: {details.weight}</p>
            </Col>
          </Row>
        )}
      </Container>
    </Container>
  );
}

export default App;
