import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const showCart = useSelector((state) => state.ui.cartVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      const response = await fetch(
        "https://react-http-971fb-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) throw new Error("Sending cart data failed!");

      // const data = await response.json(); // Response is not needed - knowing it's ok is enough
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sending cart data successfully!",
        })
      );
    };

    // Block first send on Application start
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((err) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: err.message,
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;