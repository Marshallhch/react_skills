import React, { Component } from "react";

class CallbackFunc extends Component {
  componentDidMount() {
    this.logPring(
      1,
      function (return1) {
        //3. 더해진 수 2가 콜백함수에 대입
        console.log("return1 : " + return1);
        this.logPring(return1, function (return2) {
          //4. 더해진 2를 콜백함수 2에 대입 후 다시 logPring함수 실행 <-- 수는 2 + 2로 4
          console.log("return2 : " + return2);
        });
      }.bind(this) //밖에 있는(5번줄) this를 안에 있는 this(10번줄)도 함께 사용할 수 있도록 하기 위해 (bind())함수 사용
    );
  }

  logPring(param, callback) {
    console.log("logPring param : " + param); //1. param에 1 대입
    param += param; //2. param에 1이 더해짐
    callback(param);
  }

  render() {
    return <h1>Callback Function</h1>;
  }
}

export default CallbackFunc;
