import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Transformations.css';

const TransformationCard = ({ transformation }) => (
  <div className="transformations-card">
    <img src={transformation.image.url} alt={transformation.image.description} className="transformations-card-image" />
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

const Transformations = () => {
  const [transformations, setTransformations] = useState([]);

  useEffect(() => {
    const fetchTransformations = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Transformations');
        setTransformations(response.data);
      } catch (error) {
        console.error("Error fetching transformations:", error);
      }
    };

    fetchTransformations();
  }, []);

  return (
    <div className="trans-container">
      <div className="transformations-container">
        <h2>Transformations</h2>
        <div className="transformations-cards">
          {transformations.map((transformation) => (
            <TransformationCard key={transformation.name} transformation={transformation} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transformations;
