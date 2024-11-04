import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img src="/images/logo.png" alt="logo" className="logo-footer" />
      <div className="text-footer">
        <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
      </div>
      <ul className="links-footer">
        <li><a href="link1">Link 1</a></li>
        <li><a href="link2">Link 2</a></li>
        <li><a href="link3">Link 3</a></li>
        <li><a href="link4">Link 4</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
