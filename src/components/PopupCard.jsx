// PopupCard.jsx
import React from 'react';
import './PopupCard.css';

const PopupCard = ({ isOpen, togglePopup, children }) => {
  if (!isOpen) return null;

  return (
    <div className={`popup-overlay ${isOpen ? "show" : ""}`} onClick={togglePopup}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={togglePopup}>×</button>
        <div className="popup-content">{children}</div>
      </div>
    </div>
  );
};

export default PopupCard;
