import React, { Component } from "react";

class OnChangeEvt extends Component {
  change = (e) => {
    let val = e.target.value;
    console.log("param : " + val);
  };

  render() {
    return (
      <div>
        <input type='text' onChange={this.change} />
        <select onChange={this.change}>
          <option value='Hello'>Hello</option>
          <option value='React'>React</option>
        </select>
      </div>
    );
  }
}

export default OnChangeEvt;
