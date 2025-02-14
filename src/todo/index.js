import React,{Component} from "react";
 
class Todo extends Component{
constructor(){
    
      super(); 

      this.state={todo:"",
        list:[]
      } 
}
handlerButton=(e)=>{
    this.setState({todo:e.target.value})
}
handlerSubmit=(e)=>{
e.preventDefault();
    this.setState((a)=>{
    return{
        list:[...a.list,a.todo],
        todo:""
    }
    })
}
// handlerdelete=()=>{
// this.setState((a)=>{
//     list:a.list;
// })
// }

handlerdelete = (index) => {
    this.setState((prevState) => ({
      list: prevState.list.filter((_, i) => i !== index), 
    }));
  };
render(){
    return(
        <div>
        <form onSubmit={this.handlerSubmit}>
            <input type="text" name="todo" onChange={this.handlerButton}/>

            <input type="submit" />
            
        </form>
        {this.state.list.map((a,b)=>{
            return(
                <ul>
<li key={b}>{a}<button>edit</button><button onClick={() => this.handlerdelete(b)}>Delete</button></li>

                </ul>
            )
                
            
        })}
        </div>
    )
}
}
export default Todo;

