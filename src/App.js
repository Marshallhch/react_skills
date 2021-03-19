import React, { Component } from "react";
//import IterationSampleWidthUseState from "./components/IterationSampleWidthUseState";
import LifeCycleSample01 from "./components/lifecycle/LifeCycleSampe01";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

console.log(getRandomColor());

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Random Color</button>
        <LifeCycleSample01 color={this.state.color} />
      </div>
    );
  }
}

export default App;
