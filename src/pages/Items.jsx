import React, { useEffect, useState } from "react";
import axios from "axios";
import './Items.css';

const Items = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Items'); // Cambia la URL si es necesario
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
    <div className="container">
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
