import { FunChildComp } from "./Fcc";
import { Context } from "./context/contextFun";
import { useContext } from "react";
import "./App.css";

export const FunComp = () => {
  const { num, setNum } = useContext(Context);
  return (
    <div className="small-box">
      <h2>FC</h2>
      <h3>{num}</h3>
      <button className="btn btn-primary" onClick={() => setNum(num + 1)}>
        Add
      </button>
      <FunChildComp />
    </div>
  );
};
