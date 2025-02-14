import React from "react";
import "./sample.css";

function Sample() {
  return (
    <>
    <h1>Task1&2</h1>
      <table>
        <tr>
          {/* Correctly display the image */}
          <td>
            <img src={require("../images/samsung.jpg")} alt="Sample" style={{width:"100px",gap:"5px"}}/>
          </td>
          <td> <img src={require("../images/tablet.jpeg")} alt="Sample" style={{width:"100px"}}/></td>
          <td><img src={require("../images/iphone.png")} alt="Sample" style={{width:"100px"}}/> </td>
          <td><img src={require("../images/laptop.jpeg")} alt="Sample" style={{width:"100px"}}/> </td>
         
        </tr>
        <tr>
          <td> <img src={require("../images/samsung.jpg")} alt="Sample" style={{width:"100px"}}/></td>
          <td><img src={require("../images/laptop.jpeg")} alt="Sample" style={{width:"100px"}}/></td>
          <td><img src={require("../images/tablet.jpeg")} alt="Sample" style={{width:"100px"}}/></td>
          <td><img src={require("../images/iphone.png")} alt="Sample" style={{width:"100px"}}/></td>
       
        </tr>
        <tr>
          <td> <img src={require("../images/samsung.jpg")} alt="Sample" style={{width:"100px"}}/></td>
          <td><img src={require("../images/laptop.jpeg")} alt="Sample" style={{width:"100px"}}/></td>
          <td><img src={require("../images/iphone.png")} alt="Sample" style={{width:"100px"}}/></td>
          <td><img src={require("../images/tablet.jpeg")} alt="Sample" style={{width:"100px"}}/></td>
          
        </tr>
        <tr>
          <td><img src={require("../images/samsung.jpg")} alt="Sample" style={{width:"100px"}}/></td>
          <td><img src={require("../images/iphone.png")} alt="Sample" style={{width:"100px"}}/></td>
          <td><img src={require("../images/tablet.jpeg")} alt="Sample" style={{width:"100px"}}/></td>
          <td><img src={require("../images/laptop.jpeg")} alt="Sample" style={{width:"100px"}}/></td>
        </tr>
      </table>
    </>
  );
}

export default Sample;
