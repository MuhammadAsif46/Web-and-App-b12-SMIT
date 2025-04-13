import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
  useId,
} from "react";
import Button from "./components/Button";
import About from "./components/About";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  // const heading = useRef(null);
  const inputRef = useRef(null);
  const id = useId()
  const id1 = useId()
  const id2 = useId()

  console.log("useId -->",id);
  console.log("useId -->",id1);
  console.log("useId -->",id2);
  

  // console.log("App component");

  // const getData = useCallback(() => {
  //   return ["abc", "xyz"];
  // }, [show]);

  const randomValueGenerate = () => {
    return Math.random() * 10;
  };

  const randomValue = useMemo(() => randomValueGenerate(), [show]);

  // console.log(getData());
  // console.log(randomValueGenerate());
  // console.log(randomValue);

  return (
    <div>
      {/* {randomValue} */}
      {/* <Button getData={getData} /> */}
      {/* <br />
      <br />
      <h1 ref={heading}>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      <button disabled={counter < 1} onClick={() => setCounter(counter - 1)}>
        Dec
      </button> */}

      <br />
      <br />
      {/* <button onClick={() => setShow(!show)}>
        {show ? "update" : "create"}
      </button> */}


      <input type="text" ref={inputRef} id=""/>
      {/* <button onClick={() => console.log(inputRef.current.focus())}>click</button> */}
      {/* <button onClick={() => setCounter(oldValue => oldValue + 1)}>Inc</button> */}
      {/* <button disabled={counter < 1} onClick={() => setCounter(oldValue => oldValue - 1)}>Dec</button> */}
    </div>
  );
};

export default App;
