import React, { useContext } from "react";
import CartContext from "../context/cartContext.js";

const Cart = () => {
  const { cart } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cart.reduce((sum, course) => sum + course.price, 0);

  return (
    <div>
      <h1>My Cart</h1>
      <ul>
        {cart.length > 0 ? (
          cart.map((course, index) => (
            <li key={index}>
              {course.coursename} - ${course.price}
            </li>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ul>

      {/* Show total price */}
      {cart.length > 0 && (
        <div style={{ marginTop: "20px", fontWeight: "bold" }}>
          Total Price: ${totalPrice}
        </div>
      )}
    </div>
  );
};

export default Cart;
