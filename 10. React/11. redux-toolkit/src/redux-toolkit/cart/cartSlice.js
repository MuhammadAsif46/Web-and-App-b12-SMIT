import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartIncrement: (state) => {
      state.cart += 1;
    },
    cartDecrement: (state) => {
      state.cart -= 1;
    },
    cartDeleteAll: (state, action) => {
      state.cart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { cartIncrement, cartDecrement,cartDeleteAll } = cartSlice.actions;

export default cartSlice.reducer;
