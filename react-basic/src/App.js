// import { Fragment } from "react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(1); // react hooks 함수 중 하나
  const double = () => {
    setNumber(number * 2);
    console.log(number);
    // 리렌더링이 한번만 일어날 수 있도록 한꺼번에 처리되기 때문에
    // 이 시점에서는 아직 업데이트가 안됨
  };

  return (
    <>
      <div>{number}</div>
      <button onClick={double}>Submit</button>
    </>
  );
}
export default App;
