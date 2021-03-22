import React, { Component } from "react";

class ComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "React",
      StateArrObj: ["React", { react: "200" }],
    };
  }

  buttonClick = (type) => {
    if (type === "String") {
      this.setState({ StateString: "React" });
    } else {
      this.setState({ StateArrOjb: ["React", { react: "200" }] });
    }
  };

  render() {
    console.log("render Call");
    return (
      <div>
        <button onClick={(e) => this.buttonClick("string")}>
          Change String
        </button>
        <button onClick={(e) => this.buttonClick("ArrayObject")}>
          Change Array Object
        </button>
      </div>
    );
  }
}

export default ComponentClass;
