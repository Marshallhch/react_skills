import React, { Component } from "react";

class FetchGet extends Component {
  //get url data using 'fetch' <- get method
  //async is asynchronous and then using await to synchronous

  componentDidMount = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?limit=1"
    );
    const body = await response.json();
    console.log(body);
  };

  render() {
    return <h1>Fetch Get</h1>;
  }
}

export default FetchGet;
