import { useState,useMemo } from "react"

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

  const result=useMemo(()=>{
    return calc(num);
  },[num]);

  return(
    <div className="app">
      <div className="box">
        <h2>{num} : {result}</h2>
        <button className="btn btn-primary" onClick={handleAdd}>+</button>
        <button className="btn btn-danger" onClick={handleSub}>-</button>
      </div>
      <div className="large-box">
        <p>
          <input name="enam" type="text" value={ename} onChange={((e)=>{setEname(e.target.value)})}/>
        </p>
        {ename}
      </div>
    </div>
  );
}

const calc=(n)=>{
  for(let i=1;i<=50000;i++)
  for(let j=1;j<=50000;j++);
return n*n
}