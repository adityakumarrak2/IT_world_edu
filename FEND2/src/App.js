import "./App.css"
import { useState } from "react"
import { FunComp } from "./Fc"

export const App=()=>{

    const [num,setNum]=useState(0);
    const handleAdd=()=>{ setNum(num+1) }
    const handleSub=()=>{ setNum(num-1) }

    return(
        <div className="app">
            <div className="box">
            <h2>AC</h2>    
            <h1>{num}</h1>
            <button type="button" className="btn btn-primary" onClick={handleAdd}>Add</button>
            <button type="button" className="btn btn-danger" onClick={handleSub}>Sub</button>
            <FunComp num={num}/>
            </div>
        </div>
    );
}