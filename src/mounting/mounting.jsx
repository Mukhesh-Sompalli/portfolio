import React, { Component } from "react";
import Cards from "../boostrapcards/headcards.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import BasicExample from "./spinner.jsx";

class Mounting extends Component {
    constructor() {
        console.log("constructing");
        super();
        this.state = {
            products: [],
            loading: true, // Add loading state
        };
    }

    componentDidMount() {
        console.log("mounting");
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                this.setState({ products: res.data, loading: false }); // Set loading to false after data is fetched
            });
    }

    static getDerivedStateFromProps() {
        console.log("deriving");
        return null;
    }

    render() {
        console.log("rendering");
        return (
            <div>
                {this.state.loading ? (
                    <BasicExample /> // Show spinner while loading
                ) : (
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                        {this.state.products.map((a, b) => {
                            return (
                                <h4 key={b}>
                                    <Cards
                                        title={a.title}
                                        img={a.image}
                                        desc={a.description}
                                        category={a.category}
                                    />
                                </h4>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export default Mounting;
