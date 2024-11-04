
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <img src="/images/logo.png" alt="tboi" className="logo-header" />
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/characters">Characters</Link></li>
          <li><Link to="/enemies">Enemies</Link></li>
          <li><Link to="/items">Items</Link></li>
          <li><Link to="/pickups">Pickups</Link></li>
          <li><Link to="/cards">Cards</Link></li>
          <li><Link to="/bosses">Bosses</Link></li>
          <li><Link to="/rooms">Rooms</Link></li>
          <li><Link to="/transformations">Transformations</Link></li>
          <li><Link to="/trinkets">Trinkets</Link></li>
          <li><Link to="/extra">Extra</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
