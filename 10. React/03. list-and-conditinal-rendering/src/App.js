import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./App.css";
import MyButton from "./components/button/MyButton";
import abc from "./assets/burger.png"
import List from "./components/list/List";


function App() {
  const username = "faraz";
  // console.log(username);

  function foo(a,c,b) {
    console.log(a,c,b);
  }

  return (
    <div>
       {/* <Header /> */}
      {/*<h1 className="heading">Hello world</h1>
      <MyButton />
      <h1 className="heading">Hello world</h1>
      <Footer /> */}
      <h1
        className="heading"
        // style={{
        //   backgroundColor: "black",
        //   padding: 20,
        //   border: "13px solid yellow",
        // }}
      >
        {" "}
        Hello World : -- {username}
      </h1>
      <h1 className="heading2"> Wellcome user</h1>
      {/*<button onClick={foo}>Click me</button> ----- simple function call */}
      {/* <button onClick={() => foo("greet","abc","hello")}>Click me</button>  function call with argument */}

      {/* <img src={abc} alt="image" width={500} height={500}/> */}

      <Footer/>
      <List/>
    </div>

   
  );
}

export default App;
