import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const cartItemComponents = [];

  cartItems.forEach((cartItem) => {
    const cartItemProp = {
      ...cartItem,
      total: cartItem.quantity * cartItem.price,
    }; // { title: cartItem.title, quantity: cartItem.quantity, total: 18, price: cartItem.price }
    cartItemComponents.push(
      <CartItem key={cartItem.title} item={cartItemProp} />
    );
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItemComponents}</ul>
    </Card>
  );
};

export default Cart;
