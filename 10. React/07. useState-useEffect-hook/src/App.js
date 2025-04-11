import { useState, useEffect } from "react";
import Button from "./components/Button";

const App = () => {
  const [name, setName] = useState("Jhon");
  const [todos, setTodos] = useState(["test1", "test2"]);
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [showButton, setShowButton] = useState(true);
  //      var  -  function

  // console.log(todos);
  // console.log(value);

  // component did mount
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  //   // console.log("useffect console running.....");
  //   console.log(data);
  // }, []);

  // component did Update
  // useEffect(() => {
  //   console.log("useffect console running.....");
  // }, [todos, value]);

  // console.log("running.....");

  // fetch("https://jsonplaceholder.typicode.com/todos")
  // .then((response) => response.json())
  // .then((json) => setData(json));
  

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  //   // console.log("useffect console running.....");
  //   console.log(data);

  //   return () => {
  //     console.log("component mar gaya....");
  //   };
  // }, [todos]);

  return (
    <div>
      <h1>App</h1>
      <hr />
      {/* <h3>{name}</h3>
      <button onClick={() => setName("Elia")}>update</button> */}
      {/* <ul>
        {todos.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => {
            setTodos([...todos, value]);
            setValue("");
          }}
        >
          Add Todo
        </button>
      </ul> */}

      {/* {showButton ?  <Button /> : "value false hai ...."} */}
      {showButton && <Button />}
      <br />
      <br />
      <br />
      <br />

      <button onClick={() => setShowButton(false)}>Hide</button>
    </div>
  );
};

export default App;
