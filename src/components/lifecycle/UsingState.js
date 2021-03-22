import React, { Component } from "react";

class UsingState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: this.props.reactString,
      StateNumber: 200,
    };
  }

  render() {
    return (
      <div style={{ padding: "0px" }}>
        {this.state.StateString}
        {this.state.StateNumber}
      </div>
    );
  }
}

export default UsingState;
