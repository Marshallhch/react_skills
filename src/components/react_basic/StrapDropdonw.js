import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class StrapDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdonwOpen: false,
    };
  }

  toggle = (e) => {
    this.setState({ dropdonwOpen: !this.state.dropdonwOpen });
  };

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdonwOpen} toggle={this.toggle}>
        <DropdownToggle caret>Button Dropdonw</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>None Activate Button</DropdownItem>
          <a href='#'>
            <DropdownItem>Go to Website</DropdownItem>
          </a>
          <DropdownItem onClick={(e) => alert("Alert Button")}>
            Alert Button
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default StrapDropdown;
