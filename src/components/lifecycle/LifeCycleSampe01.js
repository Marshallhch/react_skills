import React, { Component } from "react";

class LifeCycleSample01 extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMout");
  }

  // handleClick = () => {
  //   this.setState({
  //     number: this.state.number + 1,
  //   });
  // };

  render() {
    console.log("render call");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <p>color : {this.state.color}</p>
        <button>Add</button>
      </div>
    );
  }
}

export default LifeCycleSample01;
