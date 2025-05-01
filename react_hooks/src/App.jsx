import React from "react";
import Usereducer from "./hooks/Usereducer";
import CheckUseReducer from "./miniProjects/CheckUseReducer.jsx";

const App = () => {
  return (
    <div className="App">
      <h1 className="App-heading">This is the Testing Page for react-hooks</h1>
      <div className="App-content">
        {/* <Usereducer /> */}
        <CheckUseReducer />
      </div>
    </div>
  );
};

export default App;
