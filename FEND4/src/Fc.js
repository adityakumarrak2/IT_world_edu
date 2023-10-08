import { FunChildComponent } from "./Fcc";
import { ACTIONS } from "./action/actionFun"

export const FunComp=(props)=>{
    const {state,dispatch}=props;
    return(
        <div className="small-box">
            <h2>FC</h2>
            <h3>{state.num}</h3>
            <button className="btn btn-primary" onClick={()=>dispatch({type:ACTIONS.INCRE})}>
          Sum
        </button>
        <button className="btn btn-danger" onClick={()=>dispatch({type:ACTIONS.DECRE})}>
          Sub
        </button>  
            <FunChildComponent state={state}/>         
        </div>
    );
}