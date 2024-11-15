import React, { useEffect, useState } from 'react';
import './Cards.css';

const TarotGallery = () => {
  const [cards, setCards] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/Cards')
      .then(response => response.json())
      .then(data => {
        const allCards = {
          Tarot: data.Tarot,
          "Flipped Tarot": data["Flipped Tarot"],
          "Playing Cards": data["Playing Cards"],
          "Magic Cards": data["Magic Cards"],
          "Extra Cards": data["Extra Cards"],
        };
        setCards(allCards);
        setFilteredCards(allCards); 
      })
      .catch(error => console.error('Error fetching cards:', error));
  }, []);

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
    <div className="card-container">
      <h1>Cartas</h1>
      <input
        type="text"
        placeholder="Buscar cartas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='input_appearance'
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
