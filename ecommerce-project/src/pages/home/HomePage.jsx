import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
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

  // 1. Hook into the URL parameters
  const [ searchParams ] = useSearchParams();

  // 2. Extract the specific value for 'search'.
  // If URL is "/?search=toaster", then search = "toaster".
  // If URL is just "/", then search = null.
  const search = searchParams.get('search');

  useEffect(() => {
    const getHomeData = async () => {

      // 3. Logic: If 'search' exists, use the search API endpoint.
      // Otherwise, use the standard products endpoint.
      const urlPath = search ? `/api/products?search=${search}` : '/api/products';
      const response = await axios.get(urlPath);
      setProducts(response.data);
    };
    getHomeData();

    // 5. The Dependency Array: [search]
    // This is crucial. It tells React: "Run this whole useEffect again 
    // whenever the 'search' variable (from the URL) changes."
  }, [search]);

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
