

import React, { Component } from "react";
import axios from "axios";
import BootComp from "../../boostrap/task5";
import Spinner from 'react-bootstrap/Spinner';

class Unmounting extends Component {
  constructor() {
    super();
    this.state = { count: 1, product: null, loading: false, buttonsDisabled: false };
  }

  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.setState({ loading: true, product: null, buttonsDisabled: true }); 
      axios
        .get(`https://fakestoreapi.com/products/${this.state.count}`)
        .then((res) => {
          this.setState({ product: res.data, loading: false, buttonsDisabled: false }); 
        })
        .catch(() => {
          
          this.setState({ loading: false });
        });
    }
  }

  
  handleButtonClick = (id) => {
    this.setState({ count: id });
  };

  render() {
    const { count, product } = this.state;

    return (
      <>
        <h1>Product ID: {count}</h1>
        <div>
          {[...Array(10)].map((_, index) => {
            const buttonId = index + 1;
            return (
              <button
                key={buttonId}
                onClick={() => this.handleButtonClick(buttonId)}
                 
              >
                {buttonId}
              </button>
            );
          })}
        </div>

       
        { !product ? (
          <Spinner animation="border" /> 
        ) : (
          <BootComp
            img={product.image}
            desc={product.description}
            info={product.category}
            title={product.title}
          />
        )}
      </>
    );
  }
}

export default Unmounting;


