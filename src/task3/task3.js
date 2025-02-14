import React, { Component } from "react";
import "./task3.css";
import mobile from "../images/samsung.jpg";
import laptop from "../images/laptop.jpeg";
import iphone from "../images/iphone.png";
import tablet from "../images/tablet.jpeg";

const products = [
  {
    item: "Samsung",
    cost: 55000,
    image: mobile,
    productAvailability: true,
  },
  {
    item: "Laptop",
    cost: 55000,
    image: laptop,
    productAvailability: false,
  },
  {
    item: "Tablet",
    cost: 5500,
    image: tablet,
    productAvailability: true,
  },
  {
    item: "iPhone",
    cost: 155000,
    image: iphone,
    productAvailability: false,
  },
];

class Main extends Component {
  render() {
    return (
      <>
        <div className="mainbox">
          <div className={products[0].productAvailability ? "available" : "unavailable"}>
            <h1>{products[0].item}</h1>
            <img
              src={products[0].image}
              alt={products[0].item}
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h1>{products[0].cost}</h1>
          </div>

         
          <div className={products[1].productAvailability ? "available" : "unavailable"}>
            <h1>{products[1].item}</h1>
          
            <img
              src={products[1].image}
              alt={products[1].item}
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h1>{products[1].cost}</h1>
          </div>

      
          <div className={products[2].productAvailability ? "available" : "unavailable"}>
            <h1>{products[2].item}</h1>
            
            <img
              src={products[2].image}
              alt={products[2].item}
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h1>{products[2].cost}</h1>
          </div>

         
          <div className={products[3].productAvailability ? "available" : "unavailable"}>
            <h1>{products[3].item}</h1>
            
            <img
              src={products[3].image}
              alt={products[3].item}
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h1>{products[3].cost}</h1>
          </div>
        </div>
      </>
    );
  }
}

export default Main;


// import React, { Component } from "react";
// import "./task3.css";

// // Import images correctly
// import mobile from '../images/samsung.jpg';
// import laptop from '../images/laptop.jpeg';
// import iphone from '../images/iphone.png';
// import tablet from '../images/tablet.jpeg';

// // Add image paths to the product objects
// const products = [
//   {
//     item: "Samsung",
//     cost: 55000,
//     productAvailability: true,
//     image: mobile,  // Assign the imported image
//   },
//   {
//     item: "Laptop",
//     cost: 55000,
//     productAvailability: false,
//     image: laptop,  // Assign the imported image
//   },
//   {
//     item: "Tablet",
//     cost: 5500,
//     productAvailability: true,
//     image: tablet,  // Assign the imported image
//   },
//   {
//     item: "iPhone",
//     cost: 155000,
//     productAvailability: false,
//     image: iphone,  // Assign the imported image
//   },
// ];

// class Main extends Component {
//   render() {
//     return (
//       <>
//         <div className="mainbox">
//           {/* Loop through the products to render each item */}
//           {products.map((product, index) => (
//             <div key={index} className={product.productAvailability ? "available" : "unavailable"}>
//               <h1>{product.item}</h1>
//               {/* Render the image correctly */}
//               <img
//                 src={product.image}
//                 alt={product.item}
//                 style={{ width: "100px", height: "100px", objectFit: "cover" }}
//               />
//               <h1>{product.cost}</h1>
//             </div>
//           ))}
//         </div>
//       </>
//     );
//   }
// }

// export default Main;
