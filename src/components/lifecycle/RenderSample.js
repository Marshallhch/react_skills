import React, { Component } from "react";

class RenderSample extends Component {
  render() {
    console.log("render call");
    return <h2>[Render Call Return]</h2>;
  }
}

export default RenderSample;
