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
      <button onClick={double}>Submit</button>
    </>
  );
}
export default App;
