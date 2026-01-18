import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Header.css";
import { useCart } from "../context/CartContext";

export function Header() {
  const {cartList} = useCart();

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Home"></img>
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="item">
        <span>Cart : {cartList.length}</span>
      </Link>
    </header>
  );
}
