import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Extra.css";

const Extra = () => {
  const [audios, setAudios] = useState({});
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/Audios")
      .then((response) => {
        const categories = Object.keys(response.data);
        setAudios(response.data);
        if (categories.length > 0) {
          setActiveCategory(categories[0]);
        }
      })
      .catch((error) => console.error("Error fetching audios:", error));
  }, []);

  const categoryAudios = audios[activeCategory] || [];

  return (
    <div className="container">
      <h2>Extra</h2>
      <div>
        {Object.keys(audios).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={category === activeCategory ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        {categoryAudios.map((audio, index) => (
          <div key={index}>
            <h4>{audio.Name}</h4>
            {/* Muestra audios según la estructura de cada categoría */}
            {activeCategory === "Pills" || activeCategory === "Tarot"
              ? //Pills o Tarot
                Object.entries(audio).map(([key, value]) => {
                  if (key.startsWith("voiceover") && Array.isArray(value)) {
                    return value.map((url, i) => (
                      <audio key={i} controls src={url} />
                    ));
                  }
                  return null;
                })
              : //Otros
                audio.voiceover?.map((url, i) => (
                  <audio key={i} controls src={url} />
                ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extra;
