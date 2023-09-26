// Data

const navbar = document.getElementById("navbar");
const hambar = document.getElementById("hambar");
const cross = document.getElementById("cross");
const cartBtn = document.querySelector(".bag");
const closeBtn = document.querySelector(".close-cart");
const prodDetails = document.getElementById("buyCart");
const cartOverlay = document.querySelector(".cart-overlay");
const productEl = document.querySelector("#desc");
const cartItemEl = document.querySelector(".cart-content");
const itemCount = document.querySelector("#digit");
const totalEl = document.querySelector(".cart-total");
const removeAllItem = document.querySelector(".clear-cart");
const paymentWrapper = document.querySelector(".payment-wrapper");
const payCartBtn = document.querySelector(".view-cart");
const closePayment = document.querySelector(".close-pay");
const checkout = document.querySelector(".payBtn");

// const wrapper = document.getElementById("wrapper");
const loginWrapper = document.querySelector(".login-wrapper");
const closeLogin = document.getElementsByClassName("close-login")[0];
const loginUser = document.getElementsByClassName("login-user")[0];

const filterBtn = document.querySelector(".filter-prods");

// Hambar functionality

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
		prodDetails.classList.toggle("active");
		cartOverlay.classList.toggle("show-cart");
	});
}

if (closeBtn) {
	closeBtn.addEventListener("click", () => {
		prodDetails.classList.remove("active");
		cartOverlay.classList.remove("show-cart");
	});
}

//Login Functionality;

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
// Display product dynamically

const displayProducts = (filteredProducts) => {
	productEl.innerHTML = filteredProducts
		.map((product) => {
			return `<div class="pro">
		  <img class="prod-img" src="${product.img}" alt="${product.proName}" />
		  <div class="desc">
			<span>${product.company}</span>
			<h5 class="prod-name">${product.proName}</h5>
			<div class="star">
			  <!-- Star rating and price elements -->
			  <div>
				<i class="fa-solid fa-star"></i>
				<i class="fa-solid fa-star"></i>
				<i class="fa-solid fa-star"></i>
				<i class="fa-solid fa-star"></i>
				<i class="fa-solid fa-star"></i>
				<!-- More star icons... -->
				<h4 class="prod-price">&#8377; ${product.price}</h4>
			  </div>
			  <div class="symbols">
				<a class="cart" onclick="addToCart(${product.id})">
				  <i class="fa fa-cart-shopping"></i>
				</a>
				<span class="heart wish-item" onclick="addToWishList(${product.id})"> 
				  <i class="fa-regular fa-heart"></i>
				</span>
			  </div>
			</div>
		  </div>
		</div>`;
		})
		.join("");
};

displayProducts(anotherData);

//  mapping the category element from the data & filtering the category

const setCategories = () => {
	let allCats = anotherData.map((item) => item.category);
	let categories = [
		"All",
		...allCats.filter((item, index) => {
			return allCats.indexOf(item) === index;
		}),
	];

	//  Setting the filter Buttons  through js
	filterBtn.innerHTML = categories
		.map((cat) => {
			return `<span class="filter-btn">${cat}</span>`;
		})
		.join("");

	// setting the eventListener to make it work
	filterBtn.addEventListener("click", (e) => {
		let selectedItem = e.target.textContent;
		selectedItem === "All"
			? displayProducts(anotherData)
			: displayProducts(
					anotherData.filter((item) => item.category === selectedItem)
			  );
	});
};
setCategories();

// Cart Array

let cart = [];

// Add to cart functionality

const addToCart = (id) => {
	// checking if the cart already contains that product.

	if (cart.some((product) => product.id === id)) {
		changeNumberOfUnits("plus", id);
	} else {
		const item = anotherData.find((product) => product.id === id);
		cart.push({
			...item,
			numberOfUnits: 1,
		});
	}
	updateCart();
};

const renderCart = () => {
	cartItemEl.innerHTML = ""; // to stop earlier added item after new item added
	cart.forEach((item) => {
		cartItemEl.innerHTML += `

       <div class="box">
        <img src="${item.img}" />
        <div class="content">
          <h3 class="prod-title">${item.proName}</h3>
          <span class="price">₹${item.price}</span>

          <h5 class="remove-item" onclick="removeItem(${item.id})">remove</h5>
        </div>
        <div>
          <i class="fas fa-chevron-up btn-plus" onclick="changeNumberOfUnits('plus', ${item.id})"></i>
          <p class="item-amount">${item.numberOfUnits}</p>
          <i class="fas fa-chevron-down btn-minus" onclick="changeNumberOfUnits('minus', ${item.id})"></i>
        </div>
      </div>

  `;
	});
};

const changeNumberOfUnits = (action, id) => {
	cart = cart.map((item) => {
		let numberOfUnits = item.numberOfUnits;

		if (item.id === id) {
			if (action === "plus") {
				numberOfUnits++;
			} else if (action === "minus" && numberOfUnits > 1) {
				numberOfUnits--;
			}
			return {
				...item,
				numberOfUnits,
			};
		} else {
			return item;
		}
	});
	updateCart();
};

// Adding the total of the products and number of units selected;

const renderTotal = () => {
	let total = 0;
	let totalItems = 0;
	cart.forEach((item) => {
		total += item.price * item.numberOfUnits;
		totalItems += item.numberOfUnits;
	});
	totalEl.innerHTML = "₹" + total.toFixed(2);
	itemCount.innerHTML = totalItems;
};

const updateCart = () => {
	renderCart();
	renderTotal();
};

//removing the item from the cart

const removeItem = (id) => {
	cart = cart.filter((item) => item.id !== id);
	updateCart();
};

removeAllItem.addEventListener("click", () => {
	cart = [];
	updateCart();
});

// Paymnet Functionality

if (payCartBtn) {
	payCartBtn.addEventListener("click", purchaseClicked);

	function purchaseClicked() {
		let total = 0;
		let totalItems = 0;

		paymentWrapper.style.display = "flex";
		cartItemEl.innerHTML = "";
		totalEl.innerHTML = "₹" + total.toFixed(2);
		itemCount.innerHTML = totalItems;
	}
}
if (closePayment) {
	closePayment.addEventListener("click", () => {
		paymentWrapper.style.display = "none";
	});
}
if (checkout) {
	checkout.addEventListener("click", () => {
		paymentContainer.style.display = "none";
	});
}

// WISHlist function

function addToWishList() {
	alert("Item added to the Wishlist");
}
