import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState({});
  const [isTainted, setIsTainted] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const url = isTainted
          ? "http://localhost:3000/Tainted"
          : "http://localhost:3000/Characters";
        const response = await axios.get(url);
        setCharacters(response.data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [isTainted]);

  const handleCharacterClick = (characterName) => {
    setSelectedCharacter(characters[characterName]);
  };

  const closeCharacterDetails = () => {
    setSelectedCharacter(null);
  };

  const toggleTainted = () => {
    setIsTainted(!isTainted);
  };

  return (
    <>
      <div className="char">
        <div
          className={`char-container ${
            isTainted ? "char-container-3" : "char-container-2"
          }`}
        >
          <button onClick={toggleTainted} className="button_appearence">
            {isTainted ? "Mostrar Characters" : "Mostrar Tainted"}
          </button>
          <div className="gallery">
            {Object.keys(characters).map((characterName) => (
              <div
                key={characterName}
                className="character-card"
                onClick={() => handleCharacterClick(characterName)}
              >
                <img
                  src={characters[characterName].img}
                  alt={characterName}
                />
                <h4>{characterName}</h4>
              </div>
            ))}
          </div>
        </div>
        {/* esto esconde la componente con informacion cuando no esta activa */}
        {selectedCharacter && (
          <div className="character-details">
            <button className="close-btn" onClick={closeCharacterDetails}> X </button>
            <img src={selectedCharacter.img} alt="character" />
            <h3> nombre: {selectedCharacter.name} <img src={selectedCharacter.icon} alt="icono" className="life_img"/> </h3>
            <p>
              Health:
              {selectedCharacter.Health.map((heart, index) =>
                [...Array(heart.quantity)].map((_, i) => (
                  <img
                    className="life_img"
                    key={`${index}-${i}`}
                    src={heart.image}
                    alt={heart.type}
                    title={`${heart.quantity} ${heart.type}`}
                  />
                ))
              )}
            </p>
            <p>Damage:{selectedCharacter.Damage}</p>
            <p>Tears: {selectedCharacter.Tears}</p>
            <p>Shot Speed: {selectedCharacter["Shot Speed"]}</p>
            <p>Range: {selectedCharacter.Range}</p>
            <p>Speed: {selectedCharacter.Speed}</p>
            <p>Starting Pickup(s): {selectedCharacter["Starting Pickup(s)"]}</p>
            
          </div>
        )}
      </div>
    </>
  );
};

export default Characters;
