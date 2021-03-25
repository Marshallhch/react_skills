import React, { Component } from "react";

class OnClickEvt extends Component {
  buttonClick = (param) => {
    if (typeof param != "string") {
      param = "Click a";
    }
    console.log("param : " + param);
  };

  render() {
    return (
      <div>
        <button onClick={(e) => this.buttonClick("click button")}>
          Click Button
        </button>
        <div onClick={(e) => this.buttonClick("click div")}>Click Div</div>
        <a href='#' onClick={this.buttonClick}>
          Click a
        </a>
      </div>
    );
  }
}

export default OnClickEvt;
