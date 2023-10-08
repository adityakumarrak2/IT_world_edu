export const reducer=(state,action)=>{
    switch(action.type)
    {
      case "add": return { num: state.num+1}
      case "sub": return { num: state.num-1}
      default: throw new Error("Unknown Error");
    }
  }