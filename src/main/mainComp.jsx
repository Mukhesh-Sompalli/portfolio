import React,{Component} from "react";
import "./mainComp.css"
const products=[
    {
    productName:"mobile",
    productPrice:55000,
    productAvailability:"true"
},
{
    productName:"tablet",
    productPrice:55000,
    productAvailability:"false"
}
]



class Main extends Component{
    render(){
        return(
            <>
        <div className="mainBox">
        <div className={products[0].productAvailability?"available":"unavailable"}>
        <h1>{products[0].productName}</h1>
        <h1>{products[0].productPrice}</h1>
        </div>
        <div className={products[1].productAvailability?"available":"unavailable"}>
        <h1>{products[1].productName}</h1>
        <h1>{products[1].productPrice}</h1>
        </div>
        </div>
        </>
        )
    }

}
export default Main;