import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { ViewCart } from "./components/Cart/ViewCart";
import { CartContext } from "./store/Cart-Context";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {/* ! Enclose with BrowserRouter to perfect work */}
      <BrowserRouter>
        {/* Header Component */}
        <Header />

        <div className="contianer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<ViewCart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
