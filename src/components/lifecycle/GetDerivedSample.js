import React, { Component } from "react";

class GetDerivedSample extends Component {
  static getDerivedStateFromProps(props, state) {
    //when new props recieved, update state value to new props value
    console.log(props.prop_value + "getDerivedSample call");
    return {}; //requied
  }

  constructor(props) {
    super(props);
    this.state = {}; //required
    console.log("constructor call");
  }

  render() {
    console.log("render call");
    return (
      <h2>[GetDerivedSample Call Return from GetDerivedSample Component]</h2>
    );
  }
}

export default GetDerivedSample;
