import React, { Component } from "react";

class OnKeyEvt extends Component {
  OnKey(event, e) {
    //event : 문자열, e : 이벤트
    let val = e.target.value;
    console.log("event : " + event + ", value : " + val);
  }
  //첫 번째 출력에 공백이 발생하는 이유는 키가 눌렸을 때 이벤트가 먼저 발생하고 값은 키 이벤트 이후에 할당받기 때문이다.
  //onKeyUp의 경우는 반대로 입력 값이 value에 먼저 할당되고 이벤터가 발생하므로 출력이 공백 없이 된다.
  render() {
    return (
      <div>
        onKeyDown :
        <input type='text' onKeyDown={(e) => this.OnKey("onKeyDown", e)} />
        <br />
        onKeyPress :
        <input type='text' onKeyPress={(e) => this.OnKey("onKeyPress", e)} />
        <br />
        onKeyUp :
        <input type='text' onKeyUp={(e) => this.OnKey("onKeyUp", e)} />
        <br />
      </div>
    );
  }
}

export default OnKeyEvt;
