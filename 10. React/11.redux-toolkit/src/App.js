import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, multiply } from "./redux/counter/counterSlice";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { cartDecrement, cartDeleteAll, cartIncrement } from "./redux/cart/cartSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <Navbar />
      <h1>App Component</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>{count}</h1>
      <button disabled={count < 1} onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <br />
      <br />
      <br />
      <button onClick={() => dispatch(multiply(4))}>Multiply</button>

      <div className="d-flex gap-3 justify-content-center align-items-center">
        <button onClick={() => dispatch(cartIncrement())}>Add to Cart</button>
        <button onClick={() => dispatch(cartDecrement())}>Remove to Cart</button>
        <button onClick={() => dispatch(cartDeleteAll(0))}>Delete <i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i></button>
      </div>
    </div>
  );
};

export default App;
