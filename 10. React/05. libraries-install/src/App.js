import About from "./components/About";
import bootstrap from "bootstrap"

function App() {
  
  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <h1 className="text-danger text-center ">React - Props </h1>
      <div className="row">
        <div className="col-6 bg-info text-white p-5">
          <About/>
        </div>
        <div className="col-6 bg-warning text-black p-5">
        </div>

        <div className="col-6 bg-success text-black p-5">
        </div>
        <div className="col-6 bg-primary text-black p-5">
        </div>
        <div className="col-6 bg-secondary text-black p-5">
        </div>
        <div className="col-6 bg-danger text-white p-5">
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
