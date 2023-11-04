import { useState } from "react"
import React from "react"
import "./App.css"

export const App=()=>{
  const [num,setNum]=useState(0)
  const [ename,setEname]=useState("")

  const handleAdd=()=>{
    setNum(num+1)
  }
  const handleSub=()=>{
    setNum(num-1)
  }  
  return(
    <div className="app">
      <div className="box">
        <h2>{num}</h2>
        <button className="btn btn-primary" onClick={handleAdd}>+</button>
        <button className="btn btn-danger" onClick={handleSub}>-</button>
      </div>
      <div className="large-box">
        <p>
          <input name="enam" type="text" value={ename} onChange={((e)=>{setEname(e.target.value)})}/>
        </p>
        <Display name={ename}/>
      </div>
    </div>
  );
}

const Display=React.memo(({name})=>{
  console.log(name);
  return <h2>{name}</h2>
})