import React, { Component } from "react";
import axios from "axios";
import MainCards from "../boostrapcards/cards";
import BasicExample from "../mounting/spinner";
class Updating extends Component {
    constructor() {
        super();
        this.state = { counter: 1, product: null,color:"green" };  
    }

    handleButton = () => {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    };

    handleButtons = () => {
        this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.counter !== this.state.counter) {
            axios
                .get(`https://fakestoreapi.com/products/${this.state.counter}`)
                .then((res) => this.setState({ product: res.data })) 
                .catch((err) => console.error("API Fetch Error:", err));
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.counter >= 10) {
            return false; 
        }
        return true; 
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevState, "snapshot");
        return null;
    }

    render() {
        return (
            <div>
                <h1 style={{color:this.state.color}}>{this.state.counter}</h1>
                <button onClick={this.handleButton}>Increase</button>
                <button onClick={this.handleButtons}>Decrease</button>

                {!this.state.product ? (
                    <p><BasicExample/></p>
                ) : (
                    <MainCards  /> // Pass only the selected product
                )}
            </div>
        );
    }
}

export default Updating;
