import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { layoutActions } from "../../store/layout";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const itemsInCart = cartItems
    .map((item) => item.quantity)
    .reduce((prev, current) => prev + current, 0);

  const cartToggleHandler = () => {
    dispatch(layoutActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsInCart}</span>
    </button>
  );
};

export default CartButton;
