import React, { Component } from "react";
import { Badge, Button } from "reactstrap";

class StrapBadge extends Component {
  render() {
    return (
      <div>
        <h1>
          PRODUCT NAME <Badge color='secondary'>Hit</Badge>
        </h1>
        <Button color='light' outline>
          Accessor <Badge color='dark'>4</Badge>
        </Button>
        <Badge color='danger' pill>
          Pill
        </Badge>
        <Badge href='http://example.com' color='light'>
          GoLink
        </Badge>
      </div>
    );
  }
}

export default StrapBadge;
