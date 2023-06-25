// import { Fragment } from "react";
import { useState } from "react";

function App() {
  console.log("render");
  const [number, setNumber] = useState(1);
  const double = () => {
    // const doubledNumber = number * 2;
    setNumber((prevState) => prevState * 2); // 한 줄로 쓸 수 있음
    setNumber((prevState) => {
      return prevState * 2;
    });
    console.log();
  };

  return (
    <>
      <div>{number}</div>
      <button className="btn btn-primary" onClick={double}>
        {/* jsx에서는 class를 js에서 이미 사용하고 있기 때문에 className */}
        Submit
      </button>
    </>
  );
}
export default App;
