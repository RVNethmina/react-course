import DeliveryOptions from './DeliveryOptions';
import CartItemDetails from './CartItemDetails';
import DeliveryDate from './DeliveryDate';

//props delivery deliveryOptions, cartItem , loadCart comes from CheckoutPage.jsx
function OrderSummary({ deliveryOptions, cart , loadCart }) {
  return (
    <div className="order-summary">
      {/* cart is the prop that we aceessed from App.jsx */}
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          return (
            <div key={cartItem.productId} className="cart-item-container">
              
              <DeliveryDate deliveryOptions={deliveryOptions} cartItem={cartItem} />

              <div className="cart-item-details-grid">
                <CartItemDetails cartItem={cartItem} loadCart={loadCart} deliveryOptions={deliveryOptions} />
                <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default OrderSummary;
