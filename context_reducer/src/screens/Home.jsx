import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card.jsx";
import CartContext from "../context/cartContext.js";

const courses = [
  {
    coursename: "Web Development",
    description:
      "Learn to build websites using HTML, CSS, JavaScript, and modern frameworks.",
    price: 120,
  },
  {
    coursename: "Data Science",
    description:
      "Analyze data, build models, and make predictions using Python and machine learning.",
    price: 150,
  },
];

const Home = () => {
  const { cart } = useContext(CartContext); // access cart from context

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {courses.map((card) => (
          <Card key={card.coursename} details={card} />
        ))}
      </div>

      {/* Render cart */}
      <div style={{ marginTop: "20px" }}>
        <h2>Cart:</h2>
        <ul>
          {cart.map((course, index) => (
            <li key={index}>{course.coursename}</li>
          ))}
        </ul>
        <div>
          <button>
            <Link to="/cart">my Cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
