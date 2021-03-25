import React, { Component } from "react";

class PromiseThen extends Component {
  componentDidMount() {
    new Promise((resolve) => {
      setTimeout(function () {
        resolve("react");
      }, 1500); //1. react라는 문자열이 저장되어 1.5초 후 then으로 넘긴다.
    })
      .then(function (result) {
        //2. 1.5초 후 넘겨받은 결과를 result에 저장한다.
        console.log(result);
        return result + 200;
      })
      .then((result) => {
        //3. result에 200이 더해진 값이 then 이후의 result로 다시 저장된다.
        console.log(result);
      });
  }

  //promise에는 대기, 이행, 거부로 구분하여 결과를 보여준다. 주로 요청한 결과를 이행하는 then을 사용한다.

  render() {
    return <h1>Promise Then</h1>;
  }
}

export default PromiseThen;
