import { useRef } from "react";
import "./App.css"

export const App=()=>{
  const count=useRef(0);

  const handle=()=>{    
    count.current++;    
    console.log(count.current);
  }
  console.log("I Got Rendered!");
  return(
    <button  onMouseOver={handle}>Click</button>
  );
}