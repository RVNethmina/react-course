import Product from "./Product";

// products and loadCart props are received here from the HomePage.jsx
function ProductsGrid({ products, loadCart }) {
  return (
    // we got a problem the when we change quantity from the drop down menu for one product, each and every product's quantity is changed. This happens because useState() is outside the products.map() function and it(useState) shared state between all the products. So the solution is to bring "const [quantity, setQuantity] = useState(1);" inside the products.map(). But, it is against rules of react hooks.State should be at the top level of the component. Then we created a another component called Product.jsx and we put products details inside it. Then we gave the state => "const [quantity, setQuantity] = useState(1);" to Product.jsx. It solves the problem of react hook rules. Now each and every product has its own seperate state.
    <div className="products-grid">
      {products.map((product) => {
        return (
          <Product key={product.id} product={product} loadCart={loadCart}/>
        )
      })}
    </div>
  );
}

export default ProductsGrid;
