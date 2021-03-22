import React, { Component } from "react";

class MapSample extends Component {
  render() {
    const arrayElements = [<li>React</li>, <li>Map</li>, <li>Tutorial</li>];
    return <ul>{arrayElements.map((arrayVal) => arrayVal)}</ul>;
  }
}

export default MapSample;
