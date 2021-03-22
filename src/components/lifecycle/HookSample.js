import React, { useState, useEffect } from "react";
//함수형 컴포넌트에서 클래스형 컴포넌트와 같이 state와 생명주기 함수 등의 기능을 사용하기 위해 hook을 사용한다. hook 함수에는 useState와 useEffect가 있다.

function HookSample(props) {
  const [contents, setContents] = useState("[This is React]");
  //useState 함수의 첫번째 인자 contents는 state 변수명, setContent는 state 변수 값을 변경해 준다.
  useEffect(() => {
    console.log("use effect");
  });
  //useEffect 함수는 componentDidMount 함수와 같이 html 코드들이 화면에 렌더링 된 후 실행된다.

  return (
    <div>
      <h2>{contents}</h2>
      <button onClick={() => setContents("[This is Hook]")}>Button</button>
    </div>
  );
}

export default HookSample;
