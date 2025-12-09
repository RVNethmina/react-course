import axios from 'axios'
import dayjs from 'dayjs';
import formatMoney from '../../utils/money'
import DeliveryOptions from './DeliveryOptions';

//props delivery deliveryOptions, cartItem , loadCart comes from CheckoutPage.jsx
function OrderSummary({ deliveryOptions, cart , loadCart }) {
  return (
    <div className="order-summary">
      {/* cart is the prop that we aceessed from App.jsx */}
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              // Check if the ID of the current delivery option (e.g., "1" for Free Shipping)
              // matches the delivery option ID saved on this specific cart item.
              return deliveryOption.id === cartItem.deliveryOptionId;
            }
          );

          const deleteCartItem = async () => {
            await axios.delete(`/api/cart-items/${cartItem.productId}`);
            await loadCart();
          }

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date:{" "}
                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D"
                )}
              </div>

              <div className="cart-item-details-grid">
                <img className="product-image" src={cartItem.product.image} />

                <div className="cart-item-details">
                  <div className="product-name">{cartItem.product.name}</div>
                  <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                  </div>
                  <div className="product-quantity">
                    <span>
                      Quantity:{" "}
                      <span className="quantity-label">
                        {cartItem.quantity}
                      </span>
                    </span>
                    <span className="update-quantity-link link-primary"
                      onClick={ () => {
                        
                      }}
                    >
                      Update
                    </span>
                    <span className="delete-quantity-link link-primary"
                      onClick={deleteCartItem}
                    >
                      Delete
                    </span>
                  </div>
                </div>

                <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart}/>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default OrderSummary;
