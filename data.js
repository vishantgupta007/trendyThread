// Data
const anotherData = [
	{
		id: 1,
		company: "Zara",
		proName: "Cartoon Astronaut Shirts",
		img: "./images/p1.jpg",
		price: 1099,
		category: "Men",
	},
	{
		id: 2,
		company: "D & C",
		proName: "Linen Shirts",
		img: "./images/p2.jpg",
		price: 2099,
		category: "Men",
	},
	{
		id: 3,
		company: "Hugo Boss",
		proName: "Cuban Collar Shirts",
		img: "./images/p3.jpg",
		price: 1599,
		category: "Men",
	},
	{
		id: 4,
		company: "Calvin Klien",
		proName: "Hawaiian Shirts",
		img: "./images/p4.jpg",
		price: 2299,
		category: "Men",
	},
	{
		id: 5,
		company: "Burberry",
		proName: "Tropical Printed ",
		img: "./images/p5.jpg",
		price: 2299,
		category: "Men",
	},
	{
		id: 6,
		company: "Nike",
		proName: "Flannel Shirts",
		img: "./images/p6.jpg",
		price: 1999,
		category: "Men",
	},
	{
		id: 7,
		company: "Ralph Lauren ",
		proName: "Loose Fit",
		img: "./images/p7.jpg",
		price: 1899,
		category: "Men",
	},
	{
		id: 8,
		company: "Tommy Hilfiger",
		proName: "Oversize Tropical",
		img: "./images/p8.jpg",
		price: 2099,
		category: "Men",
	},
	{
		id: 9,
		company: "Zara",
		proName: "Half-Collared Shirts",
		img: "./images/n1.jpg",
		price: 1099,
		category: "Men",
	},
	{
		id: 10,
		company: "D&C",
		proName: "Linen Shirts",
		img: "./images/n2.jpg",
		price: 2099,
		category: "Men",
	},
	{
		id: 11,
		company: "Hugo Boss",
		proName: "Cuban Collar Shirts",
		img: "./images/n3.jpg",
		price: 1599,
		category: "Men",
	},
	{
		id: 12,
		company: "Calvin Klien",
		proName: "Hawaiian Shirts",
		img: "./images/n4.jpg",
		price: 2299,
		category: "Men",
	},
	{
		id: 13,
		company: "Burberry",
		proName: "OverSize",
		img: "./images/n5.jpg",
		price: 1299,
		category: "Men",
	},
	{
		id: 14,
		company: "Nike ",
		proName: "Shorts",
		img: "./images/n6.jpg",
		price: 899,
		category: "Men",
	},
	{
		id: 15,
		company: "Ralph Lauren ",
		proName: "Denim Shirts",
		img: "./images/n7.jpg",
		price: 1799,
		category: "Men",
	},
	{
		id: 16,
		company: "Biba",
		proName: "Oversize Tropical ",
		img: "./images/n8.jpg",
		price: 1299,
		category: "Men",
	},
	{
		id: 17,
		company: "H&M",
		proName: "Adrika Kurta Sets",
		img:"./images/w1.webp",
		price: 1099,
		category: "Women",
	},
	{
		id: 18,
		company: " Fabindia",
		proName: "Aishani Fabulous Kurtis",
		img: "./images/w2.webp",
		price: 999,
		category: "Women",
	},
	{
		id: 19,
		company: "Biba",
		proName: "Adriksha superior Sets",
		img: "./images/w3.webp",
		price: 1199,
		category: "Women",
	},
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
		id: 24,
		company: "Allen Solly",
		proName: "Aishani Fabulous Kurtis ",
		img: "./images/k9.webp",
		price: 1399,
		category: "Women",
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
	{
		id: 30,
		company: "GAP",
		proName: "Girls Black Floral Print ",
		img: "./images/k5.webp",
		price: 899,
		category: "Kids",
	},
	{
		id: 31,
		company: "Cucumber",
		proName: "Unisex Green and Black Print ",
		img: "./images/k6.webp",
		price: 999,
		category: "Kids",
	},
	{
		id: 32,
		company: "TigerTrail",
		proName: "Printed Cotton Shirt",
		img: "./images/k7.webp",
		price: 899,
		category: "Kids",
	},
	{
		id: 33,
		company: "DJ&C",
		proName: "Floral Print Shirt ",
		img: "./images/k8.webp",
		price: 799,
		category: "Kids",
	},
];

// function renderProducts() {
// 	anotherData.forEach((product) => {
// 		return (productEl.innerHTML += `
// <div class="pro">
//       <img class="prod-img" src="${product.img}" />
//       <div class="desc">
//         <span>${product.company}</span>
//         <h5 class="prod-name">${product.proName}</h5>
//         <div class="star">
//           <!-- Star rating and price elements -->
//           <div>
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//             <!-- More star icons... -->
//             <h4 class="prod-price">&#8377; ${product.price}</h4>
//           </div>
//           <div class="symbols">
//             <a class="cart" onclick="addToCart(${product.id})">
//             <i class="fa fa-cart-shopping">
//             </i>
//             </a>
//            <span class="heart wish-item" onclick="addToWishList(${product.id})">
//            <i class="fa-regular fa-heart">
//            </i>
//            </span>
//           </div>
//         </div>
//       </div>
//     </div>
// `);
// 	});
// }

// renderProducts(anotherData);
