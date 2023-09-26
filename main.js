// Data
const data = [
	{
		id: 1,
		company: "Zara",
		proName: "Cartoon Astronaut Shirts",
		img: "./images/p1.jpg",
		price: 1099,
	},
	{
		id: 2,
		company: "D & C",
		proName: "Linen Shirts",
		img: "./images/p2.jpg",
		price: 2099,
	},
	{
		id: 3,
		company: "Hugo Boss",
		proName: "Cuban Collar Shirts",
		img: "./images/p3.jpg",
		price: 1599,
	},
	{
		id: 4,
		company: "Calvin Klien",
		proName: "Hawaiian Shirts",
		img: "./images/p4.jpg",
		price: 2299,
	},
	{
		id: 25,
		company: "Lilliput",
		proName: "Toddler Short Sleeve ",
		img: "./images/k1.jpg",
		price: 799,
		category: "Kids",
	},
	{
		id: 26,
		company: "Cucumber",
		proName: "Navy Polka Dot Print ",
		img: "./images/k2.webp",
		price: 1299,
		category: "Kids",
	},
	{
		id: 27,
		company: "Cucumber",
		proName: "Navy Polka Dot Print ",
		img: "./images/k3.webp",
		price: 1299,
		category: "Kids",
	},
	{
		id: 28,
		company: "Gini & Jony",
		proName: "Girls Black Floral Print",
		img: "./images/k4.webp",
		price: 1099,
		category: "Kids",
	},
];

const moreData = [
	{
		id: 20,
		company: "Allen Solly",
		proName: "Printed Round Neck Rayon ",
		img: "./images/w4.jpg",
		price: 1399,
		category: "Women",
	},
	{
		id: 21,
		company: "Allen Solly",
		proName: "Printed Round Neck Rayon ",
		img: "./images/w5.webp",
		price: 1399,
		category: "Women",
	},
	{
		id: 22,
		company: "Allen Solly",
		proName: "Printed Round Neck Rayon ",
		img: "./images/w6.jpg",
		price: 1399,
		category: "Women",
	},
	{
		id: 23,
		company: "Allen Solly",
		proName: "Printed Round Neck Rayon ",
		img: "./images/w7.jpg",
		price: 1399,
		category: "Women",
	},
	{
		id: 13,
		company: "Burberry",
		proName: "OverSize",
		img: "./images/n5.jpg",
		price: 1299,
	},
	{
		id: 14,
		company: "Nike ",
		proName: "Shorts",
		img: "./images/n6.jpg",
		price: 899,
	},
	{
		id: 15,
		company: "Ralph Lauren ",
		proName: "Denim Shirts",
		img: "./images/n7.jpg",
		price: 1799,
	},
	{
		id: 16,
		company: "Tommy Hilfiger",
		proName: "Oversize Tropical",
		img: "./images/n8.jpg",
		price: 2099,
	},
];

// const navbar = document.getElementById("navbar");
// const hambar = document.getElementById("hambar");
// const cross = document.getElementById("cross");
const prodDetails = document.getElementById("product-detail");
const itemDesc = document.getElementById("itemDesc");

// const wrapper = document.getElementById("");
const loginWrapper = document.querySelector(".login-wrapper");

const navbar = document.getElementById("navbar");
const hambar = document.getElementById("hambar");
const cross = document.getElementById("cross");
const cartBtn = document.querySelector(".bag");
const closeBtn = document.querySelector(".close-cart");

const cartOverlay = document.querySelector(".cart-overlay");
const productEl = document.querySelector("#desc");
const cartItemEl = document.querySelector(".cart-content");
const itemCount = document.querySelector("#digit");
const totalEl = document.querySelector(".cart-total");
const removeAllItem = document.querySelector(".clear-cart");
const paymentContainer = document.querySelector(".payment-container");
const payCartBtn = document.querySelector(".view-cart");
const closePayment = document.querySelector(".close-pay");
const checkout = document.querySelector(".payBtn");

const wishListIcon = document.getElementsByClassName("wish-item");
const wishcontent = document.querySelector(".wish-content-title");
const cancelWishList = document.querySelector(".cancel-wish");

const closeLogin = document.getElementsByClassName("close-login")[0];
const loginUser = document.getElementsByClassName("login-user")[0];

const bannerBtn = document.querySelector(".flat-offer");
const sideBanner = document.querySelector(".side-banner");

// for Navbar

if (hambar) {
	hambar.addEventListener("click", () => {
		navbar.classList.add("active");
	});
}

if (cross) {
	cross.addEventListener("click", () => {
		navbar.classList.remove("active");
	});
}

// Cart Functionality

if (cartBtn) {
	cartBtn.addEventListener("click", () => {
		prodDetails.classList.add("active");
		cartOverlay.classList.add("show-cart");
	});
}

if (closeBtn) {
	closeBtn.addEventListener("click", () => {
		prodDetails.classList.remove("active");
		cartOverlay.classList.remove("show-cart");
	});
}

// Login functionality

if (loginUser) {
	loginUser.addEventListener("click", () => {
		loginWrapper.style.display = "flex";
	});
}

if (closeLogin) {
	closeLogin.addEventListener("click", () => {
		loginWrapper.style.display = "none";
	});
}

// FOR SIDE BANNER

if (bannerBtn) {
	bannerBtn.addEventListener("click", () => {
		sideBanner.classList.toggle("show-banner");
	});
}

// For lopping the product detail.

// Using the single function to display both the featured products using two parameters the second one will be dislayer of the product

const displayProducts = (filteredProducts, container) => {
	container.innerHTML = filteredProducts
		.map((product) => {
			return `<div class="pro">
    <img src=${product.img} />

    <div class="desc">
      <span>${product.company}</span>
      <h5>${product.proName}</h5>

      <div class="star">
        <div>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>

          <h4>&#8377; ${product.price}</h4>
        </div>
        <div>
          <a class="cart" href="#"><i class="fa fa-cart-shopping"></i></a>
        </div>
      </div>
    </div>
  </div>`;
		})
		.join("");
};

// Here passing the two functions in a single function to avoid the redundency of the fucntion and passing the two arguments first is array and second is parent container

const runBothFunctions = () => {
	displayProducts(data, prodDetails);
	displayProducts(moreData, itemDesc);
};

runBothFunctions();

// Removing the cart Functionality from the cart

// for (let i = 0; i < removeCartButton.length; i++) {
//   let button = removeCartButton[i];
//   button.addEventListener("click", (e) => {
//     buttonClicked.parentElement.parentElement.remove();

//   });
// }

// function updateCartTotal() {
//   let total = 0;

//   for (let i = 0; i < cartRows.length; i++) {
//     let cartRow = cartRows[i];
//     const priceElement = cartRow.getElementsByClassName("price")[0];
//     const qtyElement = cartRow.getElementsByClassName("item-amount");
//     // let price = parseFloat(priceElement.innerText);
//     // let quantity = parseInt(qtyElement.innerText);
//     console.log(priceElement, qtyElement);
//   }
// }

// updateCartTotal();
