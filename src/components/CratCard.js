import "./CartCard.css";
import { useCart } from "../context/CartContext";

export function CartCard({ product }) {
  const { name, price, image } = product;
  const { removeFromCart } = useCart();

  function handleRemove() {
    removeFromCart(product);
  }

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
