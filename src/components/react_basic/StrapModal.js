import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class StrapModal extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div>
        <Button color='warning' onClick={this.toggle}>
          Modal Button
        </Button>
        <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal Header</ModalHeader>
          <ModalBody>
            The generated Lorem Ipsum is therefore always free from repetition.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.toggle}>
              Check
            </Button>
            <Button color='secondary' onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default StrapModal;
