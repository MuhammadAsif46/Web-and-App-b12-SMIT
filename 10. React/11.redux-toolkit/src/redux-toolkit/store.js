import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import  cartReducer  from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    carts: cartReducer
  },
});
