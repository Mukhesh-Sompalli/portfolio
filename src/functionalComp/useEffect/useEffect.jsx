import React, { useState, useEffect } from "react";

function UseEffect() {
  const [products, setProducts] = useState("hellow");

  useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
    //   .then(res => res.json())
    //   .then((data) => { setProducts(data) });

    let timer=setTimeout(()=>{
      setProducts("iam fine")
    },5000);
    return ()=>{
      clearTimeout(timer)
      console.log("time out")
    }
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <h1>Products</h1>
      {/* <ul>
        {products.map((item) => {
          return (
            <li key={item.id}>{item.category}</li>
          );
        })} */}
      {/* </ul> */}
    </>
  );
}

export default UseEffect;
