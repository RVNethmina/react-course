import { Link } from "react-router";
import "./header.css";

//This is called Type Alias = works like a variable, but for types.
type HeaderProps = {
  cart: {
    productId: string;
    quantity: number;
    deliveryOptionId: string
  } [];
};

//we tell TS the {cart} is an object with property called cart and the cart is an array and each value of an array has productId, quantity, deliveryOptionId as properties.
// { cart } is the parameter/prop not cart.
function Header( { cart }: HeaderProps ) {

  let totalQuantity = 0;

  cart.forEach((carItem) => {
    totalQuantity += carItem.quantity;
  });

  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img className="logo" src="images/logo-white.png" />
          <img className="mobile-logo" src="images/mobile-logo-white.png" />
        </Link>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <Link className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
