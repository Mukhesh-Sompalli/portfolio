import React from "react";
let isLoggedin=false
function Rend(props){
    return(
       props.isLoggedin?<h1>login successfull</h1>:<h1>login unsuccessfull</h1>


    )
}
export default Rend;