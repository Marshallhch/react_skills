import React, { Component } from "react";

class FetchPost extends Component {
  componentDidMount = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.jsonp?limit=1",
      {
        //method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { a: "react", b: 200 },
      }
    );
    const body = await response.json();
    console.log(body);
  };

  render() {
    return <h1>Fetch Post</h1>;
  }
}

export default FetchPost;
