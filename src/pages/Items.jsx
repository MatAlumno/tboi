import React, { useEffect, useState } from "react";
import axios from "axios";

const Items = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/items"); // Cambia la URL si es necesario
        setItems(response.data);
        setFilteredItems(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredItems(
      items.filter((item) =>
        item.item_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, items]);

  return (
    <div>
      <h2>Items</h2>
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
            <th>Calidad</th>
            <th>Tipo</th>
            <th>Juego</th>
            <th>Pool</th>
            <th>Tag</th>
            <th>Transformación</th>
            <th>Carga</th>
            <th>Unlock Character</th>
            <th>Unlock Boss</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.item_id}>
              <td>{item.item_name}</td>
              <td>{item.item_desc}</td>
              <td>{item.item_quality}</td>
              <td>{item.item_type}</td>
              <td>{item.item_game}</td>
              <td>{item.item_pool}</td>
              <td>{item.item_tag || "-"}</td>
              <td>{item.item_transformation || "-"}</td>
              <td>{item.item_charge || "-"}</td>
              <td>{item.unlock_char || "-"}</td>
              <td>{item.unlock_boss || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
/*

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Items = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/items'); // Cambia la URL si es necesario
        setItems(response.data);
        setFilteredItems(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredItems(
      items.filter(item => 
        item.item_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.item_desc.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, items]);

  const getDefaultValue = (value) => {
    return value || 'No disponible'; // Valor por defecto si está vacío o undefined
  };

  return (
    <div>
      <h2>Items</h2>
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
            <th>Calidad</th>
            <th>Tipo</th>
            <th>Juego</th>
            <th>Piscina</th>
            <th>Tag</th>
            <th>Transformación</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map(item => (
            <tr key={item.item_id}>
              <td>{getDefaultValue(item.item_name)}</td>
              <td>{getDefaultValue(item.item_desc)}</td>
              <td>{getDefaultValue(item.item_quality)}</td>
              <td>{getDefaultValue(item.item_type)}</td>
              <td>{getDefaultValue(item.item_game)}</td>
              <td>{getDefaultValue(item.item_pool)}</td>
              <td>{getDefaultValue(item.item_tag)}</td>
              <td>{getDefaultValue(item.item_transformation)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;


*/
