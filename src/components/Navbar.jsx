import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount = 0 }) {
  return (
    <nav className="navbar">
      <h2>StyleStash</h2>

      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/shopping">Shopping</Link>
        <Link to="/cart">🛒 Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;