import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Rooms.css';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/Rooms')
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error('Error fetching rooms:', error);
      });
  }, []);

  return (
    <div className='container'>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {rooms.map((room, index) => (
          <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '80%' }}>
            <h2>{room.clasificacion}</h2>
            <p>{room.descripcion}</p>
            {room.imagenes && room.imagenes.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {room.imagenes.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={room.clasificacion}
                    style={{ width: '100px', height: '100px', margin: '5px' }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;