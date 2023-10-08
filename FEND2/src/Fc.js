import { FunChildComponent } from "./Fcc"

export const FunComp=({num})=>{
    return(
        <div className="small-box">
            <h2>FC</h2>
            <h1>{num}</h1>
            <FunChildComponent num={num}/>
        </div>
    )
}