import React, { useReducer, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/screens/Home.jsx";
import Cart from "../src/screens/Cart.jsx";
import CartContext from "./context/cartContext.js";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "add-to-cart":
      return [...state, action.payload];
    default:
      return state;
  }
};

const App = () => {
  const [cart, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    console.log("Cart updated:", cart);
  }, []);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, dispatch }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
