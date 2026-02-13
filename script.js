// ==========================
// PRODUCT LIST (26 Shoes)
// ==========================
const products = [
{ name: "Nike Air Max 90", price: 7500 },
{ name: "Adidas Ultraboost 22", price: 8000 },
{ name: "Puma RS-X", price: 7200 },
{ name: "Jordan 1 Retro High", price: 9500 },
{ name: "New Balance 550", price: 7800 },
{ name: "Converse Chuck 70", price: 6000 },
{ name: "Nike Dunk Low", price: 8500 },
{ name: "Adidas NMD R1", price: 7700 },
{ name: "Vans Old Skool", price: 5500 },
{ name: "Reebok Classic Leather", price: 6200 },
{ name: "Fila Disruptor II", price: 5800 },
{ name: "Asics Gel-Kayano", price: 8300 },
{ name: "Nike Air Force 1", price: 9000 },
{ name: "Adidas Superstar", price: 7000 },
{ name: "Puma Suede Classic", price: 6400 },
{ name: "Under Armour HOVR", price: 8200 },
{ name: "Balenciaga Triple S", price: 15000 },
{ name: "Yeezy Boost 350", price: 12000 },
{ name: "Jordan 4 Retro", price: 11000 },
{ name: "Nike Blazer Mid", price: 6800 },
{ name: "Adidas Gazelle", price: 6900 },
{ name: "New Balance 327", price: 7600 },
{ name: "Converse Run Star", price: 7400 },
{ name: "Vans Sk8-Hi", price: 6300 },
{ name: "Reebok Zig Kinetica", price: 8100 },
{ name: "Nike React Infinity", price: 8800 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count
function updateCartCount() {
const countElement = document.getElementById("cartCount");
if (countElement) {
countElement.textContent = cart.length;
}
}
updateCartCount();

// Display products
const productGrid = document.getElementById("productGrid");
if (productGrid) {
products.forEach(product => {
const card = document.createElement("div");
card.classList.add("product-card");

card.innerHTML = `
<img src="https://via.placeholder.com/300x200" alt="${product.name}">
<h3>${product.name}</h3>
<p>Ksh ${product.price}</p>
<button class="add-to-cart"
data-name="${product.name}"
data-price="${product.price}">
Add to Cart
</button>`;

productGrid.appendChild(card);
});
}

// Add to cart
document.addEventListener("click", function (e) {
if (e.target.classList.contains("add-to-cart")) {
const name = e.target.dataset.name;
const price = parseInt(e.target.dataset.price);

cart.push({ name, price });
localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
alert(name + " added to cart!");
}
});

// Display cart items
const cartItemsDiv = document.getElementById("cartItems");
if (cartItemsDiv) {
let total = 0;

cart.forEach((item, index) => {
const div = document.createElement("div");
div.innerHTML = `
${item.name} - Ksh ${item.price}
<button onclick="removeItem(${index})">Remove</button>
`;
cartItemsDiv.appendChild(div);
total += item.price;
});

document.getElementById("totalPrice").textContent =
"Total: Ksh " + total;
}

// Remove item
function removeItem(index) {
cart.splice(index, 1);
localStorage.setItem("cart", JSON.stringify(cart));
location.reload();
}

// Clear cart
const clearBtn = document.getElementById("clearCart");
if (clearBtn) {
clearBtn.addEventListener("click", function () {
localStorage.removeItem("cart");
location.reload();
});
}

// Contact form validation
const form = document.getElementById("contactForm");
if (form) {
form.addEventListener("submit", function (e) {
e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();
const feedback = document.getElementById("formMessage");

if (name === "" || email === "" || message === "") {
feedback.textContent = "All fields are required!";
feedback.style.color = "red";
return;
}

localStorage.setItem("contactMessage",
JSON.stringify({ name, email, message })
);

feedback.textContent = "Message sent successfully!";
feedback.style.color = "green";
form.reset();
});
}