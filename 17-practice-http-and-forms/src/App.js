import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Order from "./components/Order/Order";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [orderIsShown, setOrderIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const showOrderHandler = () => {
    setCartIsShown(false);
    setOrderIsShown(true);
  };
  const hideOrderHandler = () => {
    setOrderIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onClose={hideCartHandler} onOrder={showOrderHandler} />
      )}
      {orderIsShown && (
        <Order onClose={hideOrderHandler} onOrder={showOrderHandler} />
      )}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
