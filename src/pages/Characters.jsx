import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Characters.css"; 

const Characters = () => {
  const [characters, setCharacters] = useState({});
  const [isTainted, setIsTainted] = useState(false); 

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
    const characterInfo = characters[characterName];
    console.log(characterInfo);
  };

  const toggleTainted = () => {
    setIsTainted(!isTainted);
  };

  return (
    <div
      className={`char-container ${
        isTainted ? "char-container-3" : "char-container-2"
      }`}
    >
      <h2>Characters</h2>
      <button onClick={toggleTainted}>
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
              src={characters[characterName].Health[0].image}
              alt={characterName}
            />
            <h4>{characterName}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Characters;
