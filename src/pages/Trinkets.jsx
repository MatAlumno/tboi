import React, { useEffect, useState } from "react";
import axios from "axios";

const Trinkets = () => {
  const [trinkets, setTrinkets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTrinkets, setFilteredTrinkets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/trinkets"); // Cambia la URL si es necesario
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
      trinkets.filter((trinket) =>
        trinket.trinket_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, trinkets]);

  const getDefaultValue = (value) => {
    return value || "No disponible"; // Valor por defecto si está vacío o undefined
  };

  return (
    <div>
      <h2>Trinkets</h2>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Juego</th>
            <th>Unlock Character</th>
            <th>Unlock Boss</th>
            <th>Misc Unlock</th>
          </tr>
        </thead>
        <tbody>
          {filteredTrinkets.map((trinket) => (
            <tr key={trinket.trinket_id}>
              <td>{getDefaultValue(trinket.trinket_name)}</td>
              <td>{getDefaultValue(trinket.trinket_desc)}</td>
              <td>{getDefaultValue(trinket.trinket_game)}</td>
              <td>{getDefaultValue(trinket.unlock_char)}</td>
              <td>{getDefaultValue(trinket.unlock_boss)}</td>
              <td>{getDefaultValue(trinket.misc_unlock)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trinkets;
/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Trinkets = () => {
  const [trinkets, setTrinkets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTrinkets, setFilteredTrinkets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/trinkets'); // Cambia la URL si es necesario
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
      trinkets.filter(trinket => 
        trinket.trinket_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trinket.trinket_desc.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, trinkets]);

  const getDefaultValue = (value) => {
    return value || 'No disponible'; // Valor por defecto si está vacío o undefined
  };

  return (
    <div>
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
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Juego</th>
            <th>Unlock Character</th>
            <th>Unlock Boss</th>
            <th>Misc Unlock</th>
          </tr>
        </thead>
        <tbody>
          {filteredTrinkets.map(trinket => (
            <tr key={trinket.trinket_id}>
              <td>{getDefaultValue(trinket.trinket_name)}</td>
              <td>{getDefaultValue(trinket.trinket_desc)}</td>
              <td>{getDefaultValue(trinket.trinket_game)}</td>
              <td>{getDefaultValue(trinket.unlock_char)}</td>
              <td>{getDefaultValue(trinket.unlock_boss)}</td>
              <td>{getDefaultValue(trinket.misc_unlock)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trinkets;

*/
