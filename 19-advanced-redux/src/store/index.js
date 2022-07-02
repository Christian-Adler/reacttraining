import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layout";
import cartReducer from "./cart";

const store = configureStore({
  reducer: { layout: layoutReducer, cart: cartReducer },
});

export default store;
