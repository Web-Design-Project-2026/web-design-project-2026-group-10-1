const buttons = document.querySelectorAll(".item button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const item = button.parentElement;
    const image = item.querySelector("img").src;
    const name = item.querySelector("img").alt;
    const price = item.querySelector(".price-tag").textContent;

    const product = {
      name: name,
      price: price,
      image: image,
      quantity: 1,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    const message = document.getElementById("cart-message");
    message.style.display = "block";

    setTimeout(() => {
      message.style.display = "none";
    }, 2000);
  });
});
