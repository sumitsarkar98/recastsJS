import React, { useContext, useEffect } from "react";
import CartContext from "../context/cartContext.js"; // import context

const Card = ({ details }) => {
  const { cart, dispatch } = useContext(CartContext); // access dispatch from context

  const handleOnClick = () => {
    dispatch({ type: "add-to-cart", payload: details });
  };
  useEffect(() => {
    console.log("Cart updated:", cart);
  }, [cart]);

  return (
    <div
      className="card-content"
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
    >
      <h2>{details.coursename}</h2>
      <p>{details.description}</p>
      <button onClick={handleOnClick}>Add Me</button>
    </div>
  );
};

export default Card;
