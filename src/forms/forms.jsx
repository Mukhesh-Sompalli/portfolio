import React,{Component} from "react";

class Forms extends Component{
    constructor(){
        super()
        this.state={username:"",output:"",usernames:""}
    }

    handleChange=((event)=>{
    //     let value=event.target.value;
    //   this.setState({username:value})
    const {name,value}=event.target
    this.setState({[name]:value})

    })
   
    handleSubmit=((e)=>{
        e.preventDefault()
        this.setState({output:this.state.username+this.state.usernames})
    })
    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
       <input type="text" name="username" onChange={this.handleChange}/>
       <input type="text" name="usernames" onChange={this.handleChange}/>
       <input type="submit" />         
            </form>
            <h2>{this.state.output}</h2>
            </>
        )
    }
}
export default Forms;