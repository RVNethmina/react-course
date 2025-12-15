import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import OrdersGrid from './OrdersGrid';

import "./OrdersPage.css";

function OrdersPage({ cart , loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };

    fetchOrderData();
  }, []);

  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="../../../public/favicon/orders-favicon.png" />

      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid orders={orders} loadCart={loadCart}/>
      </div>
    </>
  );
}

export default OrdersPage;
