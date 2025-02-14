import React from "react";

let products = [
    {
        name: "mahi",
        age: 25,
        productAvailability: true
    },
    {
        name: "mah",
        age: 25,
        productAvailability: true
    }
];

class Conditional extends React.Component {
    render() {
        return (
            <div>
             
                <div style={products[1].productAvailability ? style.redbox : style.unredbox}>
                <h1>{products[1].name} {products[1].age}</h1>
                </div>

                
              

                
                <h1 style={products[0].productAvailability ? style.available : style.unavailable}>
                    {products[0].name} {products[0].age}
                </h1>
            </div>
        );
    }
}

const style = {
    available: { color: "green", padding: "25px" },
    unavailable: { color: "red" },
    redbox: { backgroundColor: "green", padding: "45px" },  
    unredbox: { backgroundColor: "red", padding: "50px" }   
};

export default Conditional;
