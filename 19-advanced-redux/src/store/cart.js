import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // item: { title: "TE", quantity: 2, price: 12.34 }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { payload } = action;
      const { item } = payload;
      // try find item
      const foundItem = state.items.find(
        (cartItem) => cartItem.title === item.title
      );
      if (foundItem) foundItem.quantity += 1;
      else state.items.push({ ...item }); // neu anlegen
      return state;
    },
    removeItem(state, action) {
      const { payload } = action;
      const { item } = payload;
      // try find item
      const foundItem = state.items.find(
        (cartItem) => cartItem.title === item.title
      );
      if (foundItem) {
        if (foundItem.quantity > 1) foundItem.quantity -= 1;
        else
          state.items = state.items.filter(
            (cartItem) => cartItem.title !== item.title
          );
      }
      return state;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
