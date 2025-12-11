import dayjs from "dayjs";
import axios from 'axios'
import formatMoney from "../../utils/money";

//props delivery deliveryOptions, cartItem , loadCart comes from OrderSummary.jsx
function DeliveryOptions( {deliveryOptions, cartItem , loadCart }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>

      {deliveryOptions.map((deliveryOption) => {
        let priceString = "FREE Shipping";

        if (deliveryOption.priceCents > 0) {
          priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
        }

        const updateDeliveryOption =  async () => {
          await axios.put(`/api/cart-items/${cartItem.productId}`, {
            deliveryOptionId: deliveryOption.id
          });

          await loadCart();
        };

        return (
          <div key={deliveryOption.id} className="delivery-option"
            onClick={updateDeliveryOption}
          >
            <input
              type="radio"
              // 2. THE DECISION MAKER:
              // This asks: "Is this specific delivery option (e.g., Option 1) the one 
              // currently saved in the cart for this product?"
              // - If TRUE: The circle is filled in (selected).
              // - If FALSE: The circle is empty.
              checked={deliveryOption.id === cartItem.deliveryOptionId}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
              onChange={() => {}}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D"
                )}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeliveryOptions;
