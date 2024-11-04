// Characters.jsx
import React, { useState } from "react";
import PopupCard from "../components/PopupCard";

const Characters = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2>Characters</h2>
      <button onClick={togglePopup}>Mostrar Información</button>
      <PopupCard isOpen={isOpen} togglePopup={togglePopup}>
        <h3>Información del Personaje</h3>
        <p>Aquí puedes agregar detalles personalizados sobre el personaje.</p>
      </PopupCard>
    </div>
  );
};

export default Characters;
