let products = [
  {
    productimage: "Images/athletic-cotton-socks-6-pairs.jpg",
    productname: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    productrating: {
      stars: "Images/rating-45.png",
      votes: 87,
    },
    productprice: 10.9,
  },
  {
    productimage: "Images/intermediate-composite-basketball.jpg",
    productname: "Intermediate Size Basketball",
    productrating: {
      stars: "Images/rating-4.png",
      votes: 127,
    },
    productprice: 20.9,
  },
  {
    productimage: "Images/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    productname: "Adults Plain Cotton T-Shirt - 2 Pack",
    productrating: {
      stars: "Images/rating-45.png",
      votes: 56,
    },
    productprice: 7.99,
  },
  {
    productimage: "Images/black-2-slot-toaster.jpg",
    productname: "2 Slot Toaster - Black",
    productrating: {
      stars: "Images/rating-5.png",
      votes: 2197,
    },
    productprice: 18.99,
  },
  {
    productimage: "Images/6-piece-white-dinner-plate-set.jpg",
    productname: "6 Piece White Dinner Plate Set",
    productrating: {
      stars: "Images/rating-4.png",
      votes: 37,
    },
    productprice: 20.67,
  },
  {
    productimage: "Images/6-piece-non-stick-baking-set.webp",
    productname: "6-Piece Nonstick, Carbon Steel Oven Bakeware Ba...",
    productrating: {
      stars: "Images/rating-45.png",
      votes: 175,
    },
    productprice: 34.99,
  },
  {
    productimage: "Images/plain-hooded-fleece-sweatshirt-yellow.jpg",
    productname: "Plain Hooded Fleece Sweatshirt",
    productrating: {
      stars: "Images/rating-45.png",
      votes: 317,
    },
    productprice: 24.0,
  },
  {
    productimage: "Images/luxury-tower-set-6-piece.jpg",
    productname: "Luxury Towel Set - Graphite Gray",
    productrating: {
      stars: "Images/rating-45.png",
      votes: 144,
    },
    productprice: 35.99,
  },
  {
    productimage: "Images/liquid-laundry-detergent-plain.jpg",
    productname: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    productrating: {
      stars: "Images/rating-45.png",
      votes: 305,
    },
    productprice: 28.99,
  },
  {
    productimage: "Images/knit-athletic-sneakers-gray.jpg",
    productname: "Waterproof Knit Athletic Sneakers - Gray",
    productrating: {
      stars: "Images/rating-4.png",
      votes: 89,
    },
    productprice: 33.9,
  },
  {
    productimage: "Images/women-chiffon-beachwear-coverup-black.jpg",
    productname: "Women's Chiffon Beachwear Cover Up - Black",
    productrating: {
      stars: "Images/rating-45.png",
      votes: 235,
    },
    productprice: 20.7,
  },
  {
    productimage: "Images/round-sunglasses-black.jpg",
    productname: "Round Sunglasses",
    productrating: {
      stars: "Images/rating-45.png",
      votes: 30,
    },
    productprice: 15.6,
  },
];

function refresh(v) {
  let idk = "";
  v.forEach((product) => {
    idk += `        <div class="productDiv">
          <div class="productImageDiv"> <img class="productImage" src=${product.productimage}></div>
          <div class="productName">${product.productname}</div>
          <div class="productRating">
            <img src="${product.productrating.stars}" style="width: 100px;margin-right: 6px;">
            <div class="productRatingText">${product.productrating.votes}</div>
          </div>
          <div class="productPrice">$${product.productprice}</div>
          <div class="productAmount">
            <input class="productInput" type="text">
          </div>
          <button class="productBuyButton">Add to cart</button>
        </div>`;
  });
  document.querySelector(".bordgrid").innerHTML = idk;
}

function init() {
  refresh(products);
}

function gridSearch() {
  newgrid = [];
  products.forEach((v) => {
    if (
      v.productname
        .toLowerCase()
        .includes(document.querySelector(".search").value.toLowerCase())
    ) {
      newgrid.push(v);
    }
  });

  let idk = "";
  refresh(newgrid);
  document.querySelector(".search").value = "";
}
