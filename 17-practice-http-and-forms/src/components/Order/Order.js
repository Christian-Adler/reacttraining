// import {useState} from "react";
// import "./Order.css";
// import classes from "./Order.module.css";

import CartContext from "../../store/cart-context";
import classes from "../Cart/Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";

const Order = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <li>{`${item.amount}x ${item.name} ($${item.price}) = $${
          item.price * item.amount
        }`}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <label>Name usw.</label>
      <input type="text" />
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Order;
