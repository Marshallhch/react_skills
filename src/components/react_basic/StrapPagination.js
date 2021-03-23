import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class StrapPagination extends Component {
  pagination = (type) => {
    alert("go " + type);
  };

  render() {
    return (
      <div>
        <Pagination size='lg' aria-label='Page Navigation Example'>
          <PaginationItem>
            <PaginationLink
              previous
              onClick={(e) => this.pagination("previous")}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={(e) => this.pagination("1")}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={(e) => this.pagination("2")}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last onClick={(e) => this.pagination("last")} />
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}

export default StrapPagination;
