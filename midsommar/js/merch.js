const addButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.getElementById("cart-count");

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let totalItems = 0;

  cart.forEach((item) => {
    totalItems += item.quantity;
  });

  if (cartCount) {
    cartCount.textContent = totalItems;
  }
}

function showAddedMessage(productName) {
  const message = document.getElementById("cart-message");

  message.textContent = `${productName} added to cart`;
  message.classList.add("show");

  setTimeout(() => {
    message.classList.remove("show");
  }, 2000);
}

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = {
      name: button.dataset.name,
      price: Number(button.dataset.price),
      image: button.dataset.image,
      quantity: 1,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    showAddedMessage(product.name);
  });
});

updateCartCount();
