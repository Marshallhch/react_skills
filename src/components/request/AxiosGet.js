import React, { Component } from "react";
import axios from "axios";

class AxiosGet extends Component {
  componentDidMount() {
    axios
      .get("https://yts.mx/api/v2/list_movies.json?limit=1")
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return <h1>Axios Get</h1>;
  }
}

export default AxiosGet;
