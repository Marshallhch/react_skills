import React, { Component } from "react";

class ContructorSample extends Component {
  constructor(props) {
    super(props);
    //this.state = {};
    console.log("constructor call");
  }

  render() {
    console.log("render call");
    return <h2>[Constructor Call Return from ConstructorSample Component]</h2>;
  }
}

export default ContructorSample;
