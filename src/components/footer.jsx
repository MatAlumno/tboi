import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img src="/images/logo.png" alt="logo" className="logo-footer" />
      <div className="text-footer">
        <p>© 2024 Ricau Industries. No me roben los derecho :D</p>
      </div>
      <ul className="links-footer">
        <li><a href="https://tboi.com/" target="_blank" rel="noopener noreferrer">Cheat Sheet tboi</a></li>
        <li><a href="https://bindingofisaacrebirth.fandom.com/wiki/Binding_of_Isaac:_Rebirth_Wiki" target="_blank" rel="noopener noreferrer">wiki tboi</a></li>
        <li><a href="https://store.steampowered.com/app/1426300/The_Binding_of_Isaac_Repentance/" target="_blank" rel="noopener noreferrer">Compra el juego</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
