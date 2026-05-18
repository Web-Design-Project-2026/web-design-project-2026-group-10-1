const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
  cartItemsContainer.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "TOTAL: 0 SEK";
    return;
  }

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    cartItemsContainer.innerHTML += `
      <div class="cart-row">
        <div class="product">
          <img src="${item.image}" alt="${item.name}">
          <p>${item.name}</p>
        </div>

        <p>${item.price} SEK</p>

        <div class="quantity-controls">
          <button onclick="decreaseQuantity(${index})">-</button>
          <span>${item.quantity}</span>
          <button onclick="increaseQuantity(${index})">+</button>
        </div>

        <p>${itemTotal} SEK</p>

        <button class="remove-button" onclick="removeItem(${index})">
          REMOVE
        </button>
      </div>
    `;
  });

  cartTotal.textContent = `TOTAL: ${total} SEK`;
}

function increaseQuantity(index) {
  cart[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

displayCart();
