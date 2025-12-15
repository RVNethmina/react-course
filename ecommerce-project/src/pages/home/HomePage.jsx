import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProductsGrid from "./ProductsGrid";
import "./HomePage.css";

//in here we access the cart data and loadCart function that is sent from the App.jsx (function HomePage({cart})), This is use of props.
function HomePage({ cart, loadCart }) {
  // fetch("http://localhost:3000/api/products").then((response) => {
  //   response.json().then((data) => {
  //     console.log(data);
  //   });
  // });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []);

  //when the dependancy array is empty the code will only run once.
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/favicon/home-favicon.png" />
      <title>HomePage</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}

export default HomePage;
