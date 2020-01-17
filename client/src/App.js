import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Players from "./components/players";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    // console.log("mounted");
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        // console.log("res", res.data);
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <Players state={this.state} />
      </>
    );
  }
}

export default App;
