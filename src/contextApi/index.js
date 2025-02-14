//  import React, { useState } from "react"

//  import { useContext } from "react";

//  export const productInfo=createContext();
//  export default function Component7(){
// const [user,setUser]=useState("mukesh")
// const [products,setProducts]=useState({
//     p_name:"mobile",
//     p_id:"25000",
//     p_model:"2024"
// })

// return(<>
// <div>
//     <parentinfo>{p_name.value}</parentinfo>
// </div>
// </>)
//  }

import React, { useState, createContext, useContext } from "react";

// Create context
export const productInfo = createContext();

export default function Component7() {
  const [user, setUser] = useState("mukesh");
  const [products, setProducts] = useState({
    p_name: "mukhesh",
    p_id: "25000",
    p_model: "2024"
  });

  return (
    <productInfo.Provider value={products}>
      
       
        <ProductInfo />
      
    </productInfo.Provider>
  );
}

function ProductInfo() {
  const products = useContext(productInfo);

  return (
    <div>
      <h1>{products.p_name}</h1>
      <p>{products.p_id}</p>
      <p>{products.p_model}</p>
    </div>
  );
}
