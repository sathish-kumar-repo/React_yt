import { useContext, useEffect, useState } from "react";
import "./ViewCart.css";
import { CartContext } from "../../store/Cart-Context";

export const ViewCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart]);

  const removeCart = (product) => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.pic} alt="image" />
            </div>
            <div className="cart-product-content">
              <div>
                <h3>{product.name}</h3>
                <p>Price Rs: {product.amt}</p>
              </div>
              <button onClick={() => removeCart(product)}>
                Remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2 className="cart-amount">Total Amount Rs: {total}</h2>
    </>
  );
};
