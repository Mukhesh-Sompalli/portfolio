import React,{Component} from "react";


class Task6 extends Component{

constructor(){
    super();
    this.state={username:"",output:"",firstusername:"",secondusername:""}
}
handlerbutton=(event)=>{
    // event.preventDefault();
    // const value=event.target.value;
    // this.setState({username:value})

    const {name,value}=event.target;
    this.setState({[name]:value})
}
handlerClicker=(event)=>{
    event.preventDefault();
    this.setState({output:this.state.username+this.state.firstusername+this.state.secondusername})
}
render(){
return(
<>
<form onSubmit={this.handlerClicker}>
<input type="text" name="username" onChange={this.handlerbutton} />
<input type="text" name="firstusername" onChange={this.handlerbutton} />
<input type="text" name="secondusername" onChange={this.handlerbutton} />

<input type="submit" />

</form>
<h1>{this.state.output}</h1>
</>
)
}
}

export default Task6