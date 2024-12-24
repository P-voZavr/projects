let cart = [];

cart.push({
  productName: "Black and Gray Athletic Cotton Socks - 6 Pairs",
  productAmount: Number(1),
  productPrice: 10.9,
  productImage: "Images/athletic-cotton-socks-6-pairs.jpg",
});

function CartCalk() {
  let cartCalk = 0;
  cart.forEach((item) => {
    cartCalk += Number(item.productAmount);
  });
  return cartCalk;
}

function itemsgenerete() {
  document.querySelector(
    ".cartMiddle"
  ).innerHTML = `Checkout( <span class="checkoutSpan">${CartCalk()} Items</span> )`;
  console.log(cart);
}

function orderGenerete() {
  let cartSummary = "";

  cart.forEach((product) => {
    cartSummary += `
          <div class="gridItem">
            <div class="deliveryDate">
              Delivery date:
              <span> Thursday, January 2 </span>
            </div>

            <div class="itemInfGrid">
              <img
                class="productImage"
                src="${product.productImage}"
              />

              <div class="ienInf">
                <div class="productName">${product.productName}</div>

                <div class="productPrice">$${product.productPrice}</div>

                <div class="productQuantity">
                  Quantity:
                  <span class="quantityLabel">${product.productAmount}</span>
                </div>
              </div>

              <div class="deliveryOptions">
                <div class="deliveryOptionsTitle">
                  Choose a delivery option:
                </div>

                <div class="deliveryOption">
                  <input
                    class="deliveryOptionInput"
                    type="radio"
                    name="delivery"
                    checked=""
                  />

                  <div>
                    <div class="deliveryOptionDate">Thursday, January 2</div>
                    <div class="deliveryOptionPrice">FREE Shipping</div>
                  </div>
                </div>

                <div class="deliveryOption">
                  <input
                    class="deliveryOptionInput"
                    type="radio"
                    name="delivery"
                  />

                  <div>
                    <div class="deliveryOptionDate">Friday, December 27</div>
                    <div class="deliveryOptionPrice">$4.99 - Shipping</div>
                  </div>
                </div>

                <div class="deliveryOption">
                  <input
                    class="deliveryOptionInput"
                    type="radio"
                    name="delivery"
                  />

                  <div>
                    <div class="deliveryOptionDate">Wednesday, December 25</div>
                    <div class="deliveryOptionPrice">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
          </div>
    `;

    document.querySelector(".cartSummary").innerHTML = cartSummary;
    itemsgenerete();
  });
}
