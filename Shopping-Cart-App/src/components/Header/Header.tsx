import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { CartContext } from "../../store/Cart-Context";

export const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="navbar">
      <div className="logo">Food Cart</div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Cart"}>
            <span className="cart-count">{cart.length}</span>
            View Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};
