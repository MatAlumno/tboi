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
        const response = await axios.get('http://localhost:3000/Items');
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
        item.item_description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, items]);

  const getDefaultValue = (value) => {
    return value || ' --- ';
  };

  return (
    <div className="items-wrapper">
      <div className="items-container">
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
              <th>ID</th>
              <th>Item</th>
              <th>Tipo</th>
              <th>Calidad</th>
              <th>Pista</th>
              <th>Descripción</th>
              <th>Pool</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(item => (
              <tr key={item.item_id}>
                <td>{item.ID}</td>
                <td>{item.item_name}<img src={item.image} alt={item.item_name}/> </td>
                <td>{item.item_type}</td>
                <td>{item.item_quality}</td>
                <td>{item.item_quote}</td>
                <td>{item.item_description}</td>
                <td>{item.item_pool}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="items-additional-section">
        <h1>tablaaa</h1>
        <p> Sección Adicional negracidos</p>
      </div>
    </div>
  );
};

export default Items;
