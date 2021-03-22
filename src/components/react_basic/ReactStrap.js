import React, { Component } from "react";
import { Alert, UncontrolledAlert } from "reactstrap";

class ReactStrap extends Component {
  render() {
    return (
      <div>
        <Alert color='light'>simple Alert [color : light]</Alert>
        <UncontrolledAlert color='warning'>
          Uncontrolled Alert [color : warning]
        </UncontrolledAlert>
        {/* 삭제 가능한 알람 */}
      </div>
    );
  }
}

export default ReactStrap;
