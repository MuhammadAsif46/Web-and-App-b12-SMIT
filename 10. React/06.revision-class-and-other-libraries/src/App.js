// import { Button } from "antd";
import "./App.css";
import imageBurger from "./assets/burger.png";
import About from "./components/About";
import MyButton from "./components/antd/AntdButton/AntdButton";
import Contact from "./components/Contact";
import Home from "./components/Home/Home";

import BootButton from "./components/bootstrap/BootButton/BootButton"
import BootCard from "./components/bootstrap/BootCard/BootCard"
import AntdCard from "./components/antd/AntdCard/AntdCard";
import AntdButton from "./components/antd/AntdButton/AntdButton";

function App() {
  let firstName = "umer";

  let loader = false;

  let names = ["hello", "hello", "hello", "greet"];

  return (
    <div>
      {/* {loader ? <h1>Loading...</h1> : <div>website</div> } */}
      {loader ? (
        <img src={imageBurger} alt="image" width={150} height={150} />
      ) : (
        <div>website</div>
      )}
      <Home />
      <ul>
        {names.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
      {/*<About ali={"hello"}/>
      <h1
        className="name"
        style={{
          color: "blue",
          backgroundColor: "black",
        }}
      >
        App - {firstName}
      </h1>
      <div>
        <img src={imageBurger} alt="image" width={150} height={150}/>
      </div>
      <About />*/}
      <hr />
      <Contact />

      <div className="row m-0" style={{ height: "100vh" }}>
        <div className="col-4 border h-50">
          <h1>Bootstrap</h1>
          <BootButton/>
          <hr/>
          <BootCard/>
        </div>
        <div className="col-4 border h-50">
          <h1>Antd design</h1>
          <AntdCard/>
          <hr/>

          <AntdButton/>
        </div>
        <div className="col-4 border h-50">
          
        </div>
      </div>
    </div>
  );
}

export default App;
