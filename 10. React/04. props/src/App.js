import About from "./components/About/About";
import About1 from "./components/About1/About1";
import About2 from "./components/About2/About2";
import About3 from "./components/About3/About3";
import Home from "./components/Home/Home";
import Home2 from "./components/Home2/Home2";
import MyButton from "./components/MyButton/MyButton";

function App() {
  const firstName = "Jhon";
  const lastName = "Elia";

  const getFullName = (a) => {
    console.log(a);
  };

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <h1 className="text-danger text-center ">React - Props : {firstName}</h1>
      <div className="row">
        <div className="col-6 bg-info text-white p-5">
          <Home abc="welcome" name={firstName} />
        </div>
        <div className="col-6 bg-warning text-black p-5">
          <About lastName={lastName} welcome="Welcome" foo={getFullName} />
        </div>

        <div className="col-6 bg-success text-black p-5">
          <About1 lastName={lastName} welcome="Welcome" foo={getFullName} />
        </div>
        <div className="col-6 bg-primary text-black p-5">
          <About2 lastName={lastName} welcome="Welcome" foo={getFullName} />
        </div>
        <div className="col-6 bg-secondary text-black p-5">
          <About3 lastName={lastName} welcome="Welcome" foo={getFullName} />
        </div>
        <div className="col-6 bg-danger text-white p-5">
          <Home2 abc="welcome" name={firstName} />
        </div>
      </div>
      {/* <MyButton title="Cancel" />
      <MyButton title="Edit" />
      <MyButton title="Post" />
      <MyButton title="Delete" /> */}
    </div>
  );
}
export default App;
