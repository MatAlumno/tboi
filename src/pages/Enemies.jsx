import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Enemies.css";

const EnemiesGallery = () => {
  const [enemiesData, setEnemiesData] = useState([]);
  const [selectedEnemy, setSelectedEnemy] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEnemies = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Enemies"); 
        setEnemiesData(response.data);
      } catch (error) {
        console.error("Error fetching enemy data:", error);
      }
    };

    fetchEnemies();
  }, []);

  //Buscador especifico :b
  const filteredEnemies = enemiesData.filter((enemy) =>
    enemy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="enemies-container">
      <div className="gallery">
        <input
          type="text"
          placeholder="Buscar enemigos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <div className="enemy-list">
          {filteredEnemies.map((enemy) => (
            <div
              key={enemy.id}
              className="enemy-card"
              onClick={() => setSelectedEnemy(enemy)}
            >
              <img src={enemy.Image} alt={enemy.name} className="enemy-image" />
              <p>{enemy.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="details">
        {selectedEnemy ? (
          <>
            <h2>{selectedEnemy.name}</h2>
            <img
              src={selectedEnemy.Image}
              alt={selectedEnemy.name}
            />
            <p>
              <strong>Descripción:</strong> {selectedEnemy.description}
            </p>
            <p>
              <strong>ID:</strong> {selectedEnemy.id}
            </p>
          </>
        ) : (
          <p>Selecciona un enemigo para ver los detalles.</p>
        )}
      </div>
    </div>
  );
};

export default EnemiesGallery;
