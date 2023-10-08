export const FunChildComponent=(props)=>{
    const {state}=props;
    return(
        <div className="small-box2">
        <h2>FCC</h2>
        <h3>{state.num}</h3>        
        </div>
    );
}