
import dayjs from 'dayjs';

function DeliveryDate( {deliveryOptions , cartItem }) {
  const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
    // Check if the ID of the current delivery option (e.g., "1" for Free Shipping)
    // matches the delivery option ID saved on this specific cart item.
    return deliveryOption.id === cartItem.deliveryOptionId;
  });
  return (
    <div className="delivery-date">
      Delivery date:{" "}
      {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D"
      )}
    </div>
  );
}

export default DeliveryDate;
