function calculateDiscount() {
  let purchaseAmount = parseFloat(document.getElementById("purchaseAmount").value);
  let hasCoupon = document.getElementById("hasCoupon").checked;
  let finalPrice = purchaseAmount;
  let discountText = "without any discount applied";

  if (purchaseAmount > 100) {
    finalPrice = purchaseAmount - (purchaseAmount * 20 / 100);
    discountText = "with discount of 20% applied";
  } else if (purchaseAmount > 50) {
    finalPrice = purchaseAmount - (purchaseAmount * 10 / 100);
    discountText = "with discount of 10% applied";
  }

  if (hasCoupon) {
    finalPrice = finalPrice - (finalPrice * 10 / 100);

    if (discountText === "without any discount applied") {
      discountText = "with coupon 10% applied";
    } else {
      discountText += " + coupon 10%";
    }
  }

  return { finalPrice, discountText };
}

function calculate() {
  let { finalPrice, discountText } = calculateDiscount();

  document.getElementById("finalPrice").textContent = "$" + finalPrice.toFixed(2);
  document.getElementById("discountInfo").textContent = discountText;
  document.getElementById("resultCard").style.display = 'block';
}