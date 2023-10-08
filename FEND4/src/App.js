import "./App.css";
import { useReducer,useState } from "react";
import { reducer } from "./reducer/reducerFun";

export function App() {
  
  const [state,dispatch]=useReducer(reducer,[]);
  const [ename,setEname]=useState("");
  const [email,setEmail]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    const contact={
      id:Date.now(),
      ename,
      email
    }
    dispatch({type:"add",payload: contact})
    setEmail("")
    setEname("")
  }
  

  return (
    <div className="app">
      <div className="box">
        <form className="form-group" onSubmit={handleSubmit} >
          <input
            type="text"
            placeholder="EName"
            className="form-control"
            value={ename}
            onChange={(e)=>{
              setEname(e.target.value)
            }}
          />
          <input
            type="text"
            placeholder="EMail"
            className="form-control mt-2"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
          <button className="btn btn-primary mt-2">Add Item</button>
        </form>
      </div>
      <div className="large-box">
        <ul className="list-group">
          {
            state.map((contact)=>{
               return(
                <li key={contact.id} className="list-group-item">
                  <h2>
                    { contact.ename} : {contact.email}
                    <button className="btn btn-danger ms-3" 
                    onClick={()=>{dispatch({type:"del",payload:{id:contact.id}})}}>
                      Delete
                    </button>
                  </h2>  
                </li>
               ); 
            })
          }
        </ul>
      </div>
    </div>
  );
}