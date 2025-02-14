import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 2 };
  }

  increment = (value) => {
    this.setState((prevState) => ({ counter: prevState.counter + value }));
  };

  render() {
    return (
      <>
        <button onClick={() => this.increment(1)}>+1</button>
        <button onClick={() => this.increment(-1)}>-1</button>
        <button onClick={() => this.increment(2)}>+2</button>
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.increment(-2)}>-2</button>
        <button onClick={() => this.increment(3)}>+3</button>
        <button onClick={() => this.increment(-3)}>-3</button>
      </>
    );
  }
}

export default Counter;
