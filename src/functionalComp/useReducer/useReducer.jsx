import React,{useReducer} from "react";

let intializeState={count:0}

const reducer=(state,auction)=>{
switch(auction.type){
case "increment":return {count:state.count+1};
case "decrement":return {count:state.count-1};
default:return state;
}

}

 const Reduce=()=>{
    const [state,dispatch]=useReducer(reducer,intializeState)

    return(
        <>
        <h1>user:{state.count}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
        </>
    )
}
export default Reduce;
