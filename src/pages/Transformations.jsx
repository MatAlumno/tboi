import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Transformations.css';

// Componente para cada tarjeta de transformación
const TransformationCard = ({ transformation }) => (
  <div className="card">
    <img src={transformation.image.url} alt={transformation.image.description} className="card-image" />
    <h3>{transformation.name}</h3>
    <p>{transformation.description}</p>
    <h4>Items:</h4>
    <ul>
      {transformation.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

// Componente principal
const Transformations = () => {
  const [transformations, setTransformations] = useState([]);

  useEffect(() => {
    const fetchTransformations = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Transformations'); // Cambia la URL según tu configuración
        setTransformations(response.data);
      } catch (error) {
        console.error("Error fetching transformations:", error);
      }
    };

    fetchTransformations();
  }, []);

  return (
    <div className="transformations-container">
      <h2>Transformations</h2>
      <div className="cards">
        {transformations.map((transformation) => (
          <TransformationCard key={transformation.name} transformation={transformation} />
        ))}
      </div>
    </div>
  );
};

export default Transformations;
