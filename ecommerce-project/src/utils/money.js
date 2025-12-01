// This utility function is to count the price in dollars and round off to nearest two decimal places.
function formatMoney(amountCents) {
    return `$${(amountCents.priceCents / 100).toFixed(2)}` ;
}

export default formatMoney;