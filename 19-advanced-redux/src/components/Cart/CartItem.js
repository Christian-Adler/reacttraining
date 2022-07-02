import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const addRemoveHandle = (val) => {
    const cItem = { ...props.item };
    delete cItem.total;

    if (val > 0) dispatch(cartActions.addItem({ item: cItem }));
    else dispatch(cartActions.removeItem({ item: cItem }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={addRemoveHandle.bind(window, -1)}>-</button>
          <button onClick={addRemoveHandle.bind(window, +1)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
