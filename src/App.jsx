import React from "react";
import { getPost } from "./API/PostApi";

const App = () => {
  console.log(getPost());
  
  return (
    <div>
      <h1>React CRUD application</h1>
    </div>
  );
};

export default App;
