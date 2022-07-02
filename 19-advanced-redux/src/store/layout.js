import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    showCart(state) {
      state.showCart = true;
    },
    hideCart(state) {
      state.showCart = false;
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const layoutActions = layoutSlice.actions;
export default layoutSlice.reducer;
