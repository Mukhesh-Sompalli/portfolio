import React,{Component} from "react";

 class Task7 extends Component  {
    constructor() {
        super();
        this.state={counter:0}
    }
    handlerComponent=()=>{
        this.setState({counter:this.state.counter+1})
    }
    handlerComponentOne=()=>{
        this.setState({counter:this.state.counter-1})
    }
    increment=()=>{
        this.setState({counter:this.state.counter+2})
    }
    decrement=()=>{
        this.setState({counter:this.state.counter-2})
    }
    incrementOne=()=>{
        this.setState({counter:this.state.counter+3})
    }
    incrementTwo=()=>{
        this.setState({counter:this.state.counter-3})
    }
    
    decrementOne=()=>{
        this.setState({counter:this.state.counter+3})
    }
render(){
        return(<div>

    <button  onClick={this.handlerComponent}>+1</button>
    <button onClick={this.handlerComponentOne}>-1</button>
    <button onClick={this.decrement}>-2</button>
    <h1>{this.state.counter}</h1>
    <button onClick={this.increment}>+2</button>
    <button onClick={this.decrementOne}>-3</button>
    <button onClick={this.incrementTwo}>+3</button>
     
    {/* <button onClick={this.handlerComponent}>+</button>  */}
        </div>)
}
 }
export default Task7;