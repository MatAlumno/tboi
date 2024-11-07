import React, { useEffect, useState } from "react";
import axios from "axios";
import './Characters.css'; // Asegúrate de que este archivo CSS exista

const Characters = () => {
  const [characters, setCharacters] = useState({});
  const [isTainted, setIsTainted] = useState(false); // Estado para determinar si se está mostrando "tainted"

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const url = isTainted ? "http://localhost:3000/Tainted" : "http://localhost:3000/Characters";
        const response = await axios.get(url);
        setCharacters(response.data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [isTainted]); // Actualiza cuando cambie el estado isTainted

  const handleCharacterClick = (characterName) => {
    const characterInfo = characters[characterName];
    console.log(characterInfo);
  };

  const toggleTainted = () => {
    setIsTainted(!isTainted); // Cambia el estado de isTainted
  };

  return (
    <div className="container">
      <h2>Characters</h2>
      <button onClick={toggleTainted}>
        {isTainted ? "Mostrar Characters" : "Mostrar Tainted"}
      </button>
      <div className="gallery">
        {Object.keys(characters).map((characterName) => (
          <div key={characterName} className="character-card" onClick={() => handleCharacterClick(characterName)}>
            <img src={characters[characterName].Health[0].image} alt={characterName} />
            <h4>{characterName}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
