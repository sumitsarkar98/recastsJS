import React, { useReducer, useState } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.payload;
    case "subtract":
      return state - action.payload;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Usereducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(1); // Default input is 1

  const handleChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  return (
    <div className="p-8">
      <h1 className="text-xl underline font-bold text-center">
        useReducer Hook (with input)
      </h1>
      <h2 className="text-3xl font-bold text-center mt-6">
        Current Count: {count}
      </h2>

      <div className="flex justify-center items-center gap-4 mt-10">
        <input
          type="number"
          value={inputValue}
          onChange={handleChange}
          className="border border-gray-300 px-4 py-2 rounded text-center"
        />
      </div>

      <div
        className="flex justify-center items-center gap-4 mt-16"
        style={{ padding: "5px 10px" }}
      >
        <button
          onClick={() => dispatch({ type: "add", payload: inputValue })}
          className="bg-green-600 text-white  rounded"
          style={{ padding: "5px 10px" }}
        >
          Add
        </button>
        <button
          onClick={() => dispatch({ type: "subtract", payload: inputValue })}
          className="bg-red-600 text-white  rounded"
          style={{ padding: "5px 10px" }}
        >
          Subtract
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="bg-gray-600 text-white  rounded"
          style={{ padding: "5px 10px" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Usereducer;
