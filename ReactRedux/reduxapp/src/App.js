import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incNumber, decNumber, IncNumberBy5 } from "./actions/index";
import "./App.css";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const myDispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>React Redux Increment Decrement</h1>
        <button type="button" onClick={()=> myDispatch(incNumber())}>Increment</button>
        <h1>{myState}</h1>
        <button type="button" onClick={()=> myDispatch(decNumber())}>Decrement</button>
        <button type="button" onClick={()=> myDispatch(IncNumberBy5())}>INCREMENTBY5</button>
      </div>
    </>
  );
};

export default App;
