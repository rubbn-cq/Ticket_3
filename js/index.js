function discountEngine () {
    let purchaseAmount = Number(document.getElementById("purchaseAmount").value);
    let hasCoupon = document.getElementById("hasCoupon").checked;
    let discount = 0;

    if (purchaseAmount > 100) {
        discount = 0.2;
    } else if (purchaseAmount > 50) {
        discount = 0.1
    }

    if (hasCoupon) {
        discount += 0.05;
    }
}