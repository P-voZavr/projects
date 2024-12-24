let cart = [];

let delivery = [];

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
  document.querySelector(".itemsAmount").innerHTML = `Items(${CartCalk()}):`;
}

function orderGenerete() {
  let cartSummary = "";
  if (cart.length > 0) {
    cart.forEach((product, index) => {
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
                  <button class="delButton" onclick="remove1(${index})" >Delete</button>
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
                    name="delivery${index}"
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
                    name="delivery${index}"
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
                    name="delivery${index}"
                  />

                  <div>
                    <div class="deliveryOptionDate">Wednesday, December 25</div>
                    <div class="deliveryOptionPrice">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
          </div>
    `;
      delivery.push(0);
      document.querySelector(".cartSummary").innerHTML = cartSummary;
      itemsgenerete();
      paymentGen();
    });
  } else {
    document.querySelector(".cartSummary").innerHTML = "buy something pls";
    itemsgenerete();
    paymentGen();
  }
}

function paymentGen() {
  let cartCalk = 0;

  cart.forEach((item) => {
    cartCalk += Number(item.productPrice);
  });

  const tax = (cartCalk / 100) * 10;

  document.querySelector(".paymentSummaryMoney").innerHTML = `$${cartCalk}`;
  document.querySelector(".beforeTax").innerHTML = `$${cartCalk}`;
  document.querySelector(".tax").innerHTML = `$${tax}`;
  document.querySelector(".paymentSummaryMoneyTotal").innerHTML = `$${
    cartCalk + tax
  }`;
  document.querySelector(".deliveryPrice").innerHTML = `$${delivery.reduce()}`;
}

function remove1(index) {
  cart.pop(index);
  console.log(cart);
  orderGenerete();
}

function deliveryPrice(index, price) {
  delivery[index] = Number(price);
  orderGenerete();
}
