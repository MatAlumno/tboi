import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Trinkets.css";

const Trinkets = () => {
  const [trinkets, setTrinkets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTrinkets, setFilteredTrinkets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Trinkets"); 
        setTrinkets(response.data);
        setFilteredTrinkets(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredTrinkets(
      trinkets.filter(
        (trinket) =>
          trinket.trinket_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          trinket.trinket_description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, trinkets]);
  const getDefaultValue = (value) => {
    return value || "No disponible"; 
  };
  return (
    <div className="trinkets-wrapper">
      <div className="trinkets-container">
        <h2>Trinkets</h2>
        <input
          type="text"
          placeholder="Buscar por nombre o descripción"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table>
          <thead>
          <tr>
              <th>ID</th>
              <th>Trinket</th>
              <th>Pista</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrinkets.map((trinket) => (
              <tr key={trinket.trinket_id}>
                <td>{trinket.trinket_ID}</td>
                <td>{trinket.trinket_name}<img src={trinket.image} alt={trinket.trinket_name}/> </td>
                <td>{trinket.trinket_quote}</td>
                <td>{trinket.trinket_description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="trinkets-additional-section">
        <h1>tablaaa</h1>
        <p> Sección Adicional negracidos</p>
      </div>
    </div>
  );
};

export default Trinkets;
