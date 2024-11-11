import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Rooms.css';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/Rooms')
      .then((response) => setRooms(response.data))
      .catch((error) => console.error('Error fetching rooms:', error));
  }, []);

  return (
    <div className="rooms-container">
      <div className='rooms'>
        <h1 className='rooms-title'> ROOMS </h1>
        {rooms.map((room, index) => (
          <div key={index} className="room-card">
            <h2>{room.clasificacion}</h2>
            <p>{room.descripcion}</p>
            {room.imagenes && (
              <div className="room-images">
                {room.imagenes.map((image, imgIndex) => (
                  <img key={imgIndex} src={image} alt={room.clasificacion} className="room-image" />
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
