import { NavLink, useNavigate, useSearchParams} from "react-router";
import { useState } from "react";
import "./Header.css";

//This is called Type Alias = works like a variable, but for types.
type HeaderProps = {
  cart: {
    productId: string;
    quantity: number;
    deliveryOptionId: string;
  }[];
};

//we tell TS the {cart} is an object with property called cart and the cart is an array and each value of an array has productId, quantity, deliveryOptionId as properties.
// { cart } is the parameter/prop not cart.
function Header({ cart }: HeaderProps) {

  const navigate = useNavigate();
  

  // 1. Check the URL immediately when the component loads.
  // If the URL is "?search=socks", we want "socks" to appear in the input box.
  const [ searchParams ] = useSearchParams();
  const searchText = searchParams.get('search');

  // 2. Initialize state. If 'searchText' exists (from URL), use it. 
  // Otherwise, default to an empty string ''.
  const [search, setSearch] = useState(searchText || '');
  
  // 3. This function runs when you click the Search Button.
  const searchProducts = () => {
    // It changes the browser URL.
    // Example: if search state is "toaster", URL becomes "localhost:3000/?search=toaster"
    navigate(`/?search=${search}`)
  };

  let totalQuantity = 0;

  cart.forEach((carItem) => {
    totalQuantity += carItem.quantity;
  });

  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src="images/logo-white.png" />
          <img className="mobile-logo" src="images/mobile-logo-white.png" />
        </NavLink>
      </div>

      <div className="middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          // 4. As you type, we update the React 'search' state variable instantly.
          // This does NOT search yet; it just tracks what you are typing.
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          value={search}
        />

        {/* 5. Clicking this fires the function that updates the URL */}
        <button className="search-button" onClick={searchProducts}>
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
