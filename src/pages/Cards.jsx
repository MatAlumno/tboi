import React, { useEffect, useState } from 'react';
import './Cards.css';

const TarotGallery = () => {
  const [cards, setCards] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState({});

  useEffect(() => {
    // Fetch the cards from the API
    fetch('http://localhost:3000/Cards')
      .then(response => response.json())
      .then(data => {
        // Combine all categories into a single object
        const allCards = {
          Tarot: data.Tarot,
          "Flipped Tarot": data["Flipped Tarot"],
          "Playing Cards": data["Playing Cards"],
          "Magic Cards": data["Magic Cards"],
          "Extra Cards": data["Extra Cards"],
          // Agrega aquí otras categorías de cartas según tu JSON
        };
        setCards(allCards);
        setFilteredCards(allCards); // Initial filter
      })
      .catch(error => console.error('Error fetching cards:', error));
  }, []);

  // Filter cards based on search term
  useEffect(() => {
    const results = {};
    for (const category in cards) {
      results[category] = cards[category].filter(card =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredCards(results);
  }, [searchTerm, cards]);

  const handleCardClick = (card) => {
    console.log(card);
  };

  return (
    <div className="container">
      <h1>Galería de Cartas del Tarot</h1>
      <input
        type="text"
        placeholder="Buscar cartas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="card-gallery">
        {Object.keys(filteredCards).map(category => (
          <div key={category} className="category-section">
            <h2>{category}</h2>
            <div className="cards">
              {filteredCards[category].map(card => (
                <div key={card.id} className="card" onClick={() => handleCardClick(card)}>
                  <img src={card.icon} alt={card.name} />
                  <h3>{card.name}</h3>
                  <p>{card.description}</p>
                  <p>{card.message}</p>
                  <p>{card.unlock}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TarotGallery;
