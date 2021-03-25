import React, { Component } from "react";

//JavaScript에서 id나 class와 같은 속성으로 요소에 접근하는 것과 마찬가지로 Ref는 요소가 참조하는 변수에 접근하여 해당 요소를 제어할 수 있도록 하는 기능이다.

class RefAttribute extends Component {
  constructor(props) {
    super(props);
    this.InputRef = React.createRef(); //createRef 함수로 Ref 변수 InputRef를 생성
  }

  RefFocus = (e) => {
    this.InputRef.current.focus();
  };

  JavascriptFocus() {
    document.getElementById("id").focus();
  }

  render() {
    return (
      <div>
        <input id='id' type='text' ref={this.InputRef} />
        <input type='button' value='Ref Focus' onClick={this.RefFocus} />
        {/* Ref Focus 버튼을 클릭하면 RefFocus 함수가 실행되고, RefFocus 함수 내부의 InputRef는 createRef를 통해 this.InputRef에 접근하여 제어한다. */}
        <input
          type='button'
          value='Javascriopt Focus'
          onClick={this.JavascriptFocus}
        />
      </div>
    );
  }
}

export default RefAttribute;
