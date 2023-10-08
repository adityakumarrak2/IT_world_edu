import "./App.css"
import {useReducer} from "react"
import { FunComp } from "./Fc"
import { reducer } from "./reducer/reducerFun"
import { ACTIONS } from "./action/actionFun"

const initialState={num:0}

export const App=()=>{
    const [state,dispatch]=useReducer(reducer,initialState)

    return(
        <div className="app">
            <div className="box">
             <h3>AC</h3>   
             <h2>{state.num}</h2>
             <button className="btn btn-primary" onClick={()=>dispatch({type:ACTIONS.INCRE})}>
          Sum
        </button>
        <button className="btn btn-danger" onClick={()=>dispatch({type:ACTIONS.DECRE})}>
          Sub
        </button>
             <FunComp state={state} dispatch={dispatch}/>
            </div>
        </div>
    )
}