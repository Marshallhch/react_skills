import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

class StrapListGroup extends Component {
  render() {
    return (
      <>
        <ListGroup>
          <ListGroupItem color='danger' className='justify-content-between'>
            Badge<Badge pill>200</Badge>
          </ListGroupItem>
          <ListGroupItem disabled tag='a' href='#'>
            Disabled
          </ListGroupItem>
          <ListGroupItem tag='button' action onClick={(e) => alert("button")}>
            Button
          </ListGroupItem>
        </ListGroup>
      </>
    );
  }
}

export default StrapListGroup;
