// import React from 'react';

// class Count extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       seconds: 0,
//     };
//   }

//   componentDidMount() {
//     // Set up a timer that increments the seconds every second
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }



//   tick() {
//     this.setState({
//       seconds: this.state.seconds + 1,
//     });
//   }

//   render() {
//     return <div>Seconds: {this.state.seconds}</div>;
//   }
// }

// export default Count;





// import React, { useRef } from 'react';

// const UncontrolledComponent = () => {
//   const inputRef = useRef("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//    console.log( inputRef.current.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" ref={inputRef} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default UncontrolledComponent;



// import React,{useState} from "react";

// function Contrelledomponent() {
//   const [state,setState]=useState("")

//   const handlerclick=(e)=>{
    
//     setState(e.target.value)
//   }
//   const handlerclicks=(e)=>{
// e.preventDefault();
// // setState(e.target.value)
// // setState(state)
// console.log(state)
//   }
// return(
//   <>
//   <form onSubmit={handlerclicks}>
// <input type="text" value={state} onChange={handlerclick}/>
// <input type="submit" />
// <p>{state}</p>
// </form>
//   </>
// )
// }
// export default Contrelledomponent;



import React from 'react';

const Count = (Component) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
};

export default Count;
