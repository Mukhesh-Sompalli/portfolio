import React,{Component} from "react";

class Toggler extends Component{

    constructor(){
        super()
        this.state={isOn:true}
    }
    handlerButton=(()=>{
        this.setState({isOn:!this.state.isOn})
    })
render(){
    return(<>
    
    <button  onClick={this.handlerButton}>{this.state.isOn?"switchOn":"switchOff"}</button>
    <h1>{this.state.isOn?"turned off":"turned on"}</h1>
    
    </>)
}

}
export default Toggler;