import React from "react";
import Child from "./child/child";
import Rend from "./componentrendering/componentrend";
import GrandChild from "./grandchild/grandchild";
function Parent(props){
    return(
        props.user==="login"?<h1><Child/></h1>:<h1><GrandChild/></h1>
        
        // {/* <Rend />
        // <Child c1="iam child111" c2="iam child222"/> */}
        
        
    )
}
export default Parent;