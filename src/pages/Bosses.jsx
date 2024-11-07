import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Bosses.css";

const Bosses = () => {
  const [bossData, setBossData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Bosses");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBosses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Bosses");
        setBossData(response.data);
        const uniqueCategories = [
          ...new Set(response.data.map((boss) => boss.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching the boss data:", error);
      }
    };

    fetchBosses();
  }, []);

  const filteredBosses = bossData.filter(
    (boss) => boss.category === selectedCategory
  );

  return (
    <div className="container">
      <div className="bosses-container">
        <div className="categories">
          <h2>Clasificaciones</h2>
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`category-button ${
                  selectedCategory === category ? "active" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Solo se añade scroll a la galería de jefes */}
        <div className="boss-gallery">
          {filteredBosses.length > 0 ? (
            <div className="gallery">
              {filteredBosses.map((boss) =>
                boss.images.map((image, index) => (
                  <div key={index} className="boss-card">
                    <img
                      src={image.url}
                      alt={image.name}
                      className="boss-image"
                    />
                    <p className="boss-name">{image.name}</p>
                  </div>
                ))
              )}
            </div>
          ) : (
            <p>No hay jefes disponibles en esta categoría.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bosses;
