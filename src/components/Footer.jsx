import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2>StyleStash</h2>
      <p>Discover your style. Express yourself.</p>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/shopping">Shopping</Link>
      </div>

      <p>© 2026 StyleStash</p>
    </footer>
  );
}

export default Footer;