
import React,{Component} from "react";
import HomeComp from "../home/homeComp";
import axios from "axios";
class Example extends Component {
      constructor(props){
        super(props);
        this.state={
          products:[]
        }
      }

    componentDidMount() {

      // fetch('https://fakestoreapi.com/products')
      //       .then(res=>res.json())
      //       .then(json=>{this.setState({products:json})})

      axios.get("https://fakestoreapi.com/products").then(res=>this.setState({products:res.data}))
    }
    static getDerivedStateFromProps() {
      console.log("static derived from props");
      return null; 
    }
    
  
    render() {
      return( <div>

       <div>{this.state.products.map((a,b)=>{return( <HomeComp/>)})}</div> 
      </div>)
    }
  }
  export default Example;


