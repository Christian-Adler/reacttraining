import React from "react";

// DefaultValue ist quasi das Interface
const contextInterface = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
};
const CartContext = React.createContext(contextInterface);

export default CartContext;
