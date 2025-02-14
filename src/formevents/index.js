import React,{useState} from "react";


export default function FormEvent(){
          const [user,setUser]=useState("")
          const [result,setResult]=useState("")
        const handleButton=(e)=>{
            setUser(e.target.value)
          }
const handleSubmit=(e)=>{e.preventDefault()
    setResult(user)
    setUser("")
}
          
    return(<>
    <form onSubmit={handleSubmit}>
    <input type="text" name="user" value={user} onChange={handleButton}/>
    <input type="submit" />
    </form>
    <h1>{result}</h1>
    </>)
}

