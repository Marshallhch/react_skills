import React, { Component } from "react";

class PureComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
      StateArrObj: ["react", { react: "200" }],
    };
  }

  buttonClick = (type) => {
    if (type === "String") {
      this.setState({ StateString: "react" });
    } else {
      this.setState({ StateArrObj: ["react", { react: "200" }] });
    }
  };

  render() {
    console.log("render call");
    return (
      <div>
        <button onClick={(e) => this.buttonClick("String")}>
          Change String
        </button>
        <button onClick={(e) => this.buttonClick("ArrayObject")}>
          Change Array Object
        </button>
      </div>
    );
  }
}

export default PureComponentClass;
