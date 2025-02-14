 import React from "react";
 import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 function BootComp(props){
 
    return(<div >
    
    <Card style={{ width: '18rem',backgroundColor:"aquea"}}>
      <Card.Img variant="top" src={props.img } style={{height:"150px", marginLeft:"50px"}}/>
      <Card.Body style={{height:"250px",overflowY:"scroll",overflowX:"scroll"}}>
        <Card.Title><h3>{props.title}</h3></Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button variant="primary">{props.info} </Button>
      </Card.Body>
    </Card>

    </div>)
 }

 export default BootComp;





//  import React from 'react';
// import { Card, Button } from 'react-bootstrap';

// function BootComp(props) {
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-around" }}>
//       <Card style={{ width: '18rem', flex: "1 1 18rem" }}>
//         <Card.Img variant="top" src={props.img} style={{ height: "150px", objectFit: "cover" }} />
//         <Card.Body style={{ overflow: "hidden" }}>
//           <Card.Title>{props.title}</Card.Title>
//           <Card.Text>
//             {props.desc}
//           </Card.Text>
//           <Button variant="primary">{props.category}</Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default BootComp;
