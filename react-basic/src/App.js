// import { Fragment } from "react";
import { useState } from "react";

function App() {
  // number는 state(동적인 값)
  // 컴포넌트의 상태값이 동적으로 바뀔 경우 상태 관리가 필요
  const [number, setNumber] = useState(1); // react hooks 함수 중 하나
  // react hooks를 통해 함수형 컴포넌트에서 상태 관리 가능해짐
  // useState는 상태의 초기값을 인수로 전달받아 호출
  // 반환값은 상태를 나타내는 배열. [현재 상태 값, 상태 값 갱신해주는 Setter 함수]
  // 초기에는 상태 값이 초기값으로 들어가 있고, 이 상태값을 바꾸고 싶으면 상태 함수(새롭게 바뀔 값)를 이용해 변경
  const double = () => {
    const doubledNumber = number * 2;
    setNumber(doubledNumber);
    console.log(doubledNumber);
  };

  return (
    <>
      <div>{number}</div>
      <button onClick={double}>Submit</button>
    </>
  );
}
export default App;
