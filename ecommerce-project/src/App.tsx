import { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./pages/home/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/order/OrdersPage";
import TrackingPage from "./pages/tracking/TrackingPage";
import NotFoundPage from './pages/notfound/NotFoundPage.jsx'
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  //This is called lifting the state up. We do this to share the cart data between all the pages.
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };


  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      {/* <Route path="/" element={<HomePage/>}></Route> */}
      <Route index element={<HomePage cart={cart} loadCart={loadCart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
      <Route path="*" element={<NotFoundPage cart={cart}/> } />
    </Routes>
  );
}

export default App;
