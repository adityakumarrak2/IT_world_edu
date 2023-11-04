import React, { useState } from "react";
import { FunComp } from "./Fc";
import { Context } from "./context/contextFun";

import "./App.css";

export function App() {
  const [num, setNum] = useState(0);

  return (
    <div className="app">
      <div className="box">
        <h2>AC</h2>
        <h3>{num}</h3>
        <button className="btn btn-primary" onClick={() => setNum(num + 1)}>
          Add
        </button>
        <button className="btn btn-danger" onClick={() => setNum(num - 1)}>
          Subtract
        </button>   
       <Context.Provider value={{num,setNum}}>
        <FunComp/>
       </Context.Provider>
      </div>
    </div>
  );
}

