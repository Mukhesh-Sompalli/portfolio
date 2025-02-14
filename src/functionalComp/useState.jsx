import React,{useState} from "react";
// import UseEffect from "./useEffect/useEffect";
// import UseContext from "./useContext/useContex";
// import Reduce from "./useReducer/useReducer";
import UserProfile from "./useLocation/uselocation";
function UseState(){
   const [state,setState]= useState(0)
   const handlerButton=()=>{
setState(state+1)

   }
   const handlerButtons=()=>{
    setState(state-1)
       }
    return(<>
    <UserProfile/>
    {/* <Reduce/> */}
    {/* <UseEffect/> */}
   {/* <UseContext/> */}
    {/* <h1>{state}</h1>
    <button onClick={handlerButton}>increment</button>
    <button onClick={handlerButtons}>decrement</button> */}
    </>)
}
export default UseState;