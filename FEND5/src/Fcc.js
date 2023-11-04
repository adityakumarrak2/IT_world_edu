import { useContext } from "react";
import { Context } from "./context/contextFun";

export const FunChildComp = () => {
  const { num, setNum } = useContext(Context);
  return (
    <div className="small-box2">
      <h2>FCC</h2>
      <h3>{num}</h3>
      <button className="btn btn-danger" onClick={() => setNum(num - 1)}>
        Subtract
      </button>
    </div>
  );
};