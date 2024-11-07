import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pickups.css';

const Pickups = () => {
  const [pickups, setPickups] = useState([]);

  useEffect(() => {
    // Reemplaza la URL con la URL de tu API real
    axios.get('http://localhost:3000/Pickups')
      .then((response) => {
        const data = response.data;
        // Accede a la lista de pickups en la respuesta y asigna a tu estado
        const items = data.flatMap((version) => version.items); // Esto te da una lista combinada de todos los pickups
        setPickups(items);
      })
      .catch((error) => {
        console.error('Error fetching pickups:', error);
      });
  }, []);

  return (
    <div className='container'>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pickups.map((pickup, index) => (
          <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
            <img src={pickup.image} alt={pickup.name} style={{ width: '44px', height: '44px' }} />
            <p>{pickup.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pickups;