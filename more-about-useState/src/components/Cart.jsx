import { useState } from "react";

export const Cart = () => {
  const [cartCount, setCartCount] = useState(0);
  const handleClick = () => setCartCount(cartCount + 1);
  return (
    <>
      <h1>Simple Cart</h1>
      <h2>Number of Items in the cart : {cartCount}</h2>
      <button onClick={handleClick}>{cartCount} Add to Cart</button>
    </>
  );
};
