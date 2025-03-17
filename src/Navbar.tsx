import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <h1 className="logo">My Store</h1>
      <div className="nav-links">
        <Link to="/" className="nav-button">Store</Link>
        <Link to="/cart" className="nav-button">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
