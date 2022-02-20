const checkoutPanel = document.getElementById("product-painel");
const subTotal = document.querySelector("#cart-subtotal p:nth-child(2)");
const tax = document.querySelector("#cart-tax p:nth-child(2)");
const shipping = document.querySelector("#cart-shipping p:nth-child(2)");
const total = document.querySelector("#cart-total p:nth-child(2)");
const products = document.querySelectorAll(".product");
const loading = document.getElementById("loading");
shipping.innerText = "15.00";
totalPrice();
function totalPrice() {
  let singleTotal = 0;
  const priceTexts = document.querySelectorAll(".product-line-price");
  priceTexts.forEach((e) => {
    singleTotal += +e.innerText;
  });
  subTotal.innerHTML = singleTotal.toFixed(2);
  tax.innerHTML = (singleTotal * 0.18).toFixed(2);
  shipping.innerText = subTotal.innerHTML == 0 ? 0 : "15.00";
  total.innerHTML = (+shipping.innerText + singleTotal * 1.18).toFixed(2);
  singleTotal = 0;
  loading.style.visibility = "hidden";
}
checkoutPanel.addEventListener("click", () => {});
products.forEach((product) => {
  const priceText = product.querySelector(".product-line-price");
  let singlePrice = product.getElementsByTagName("strong")[0].innerText;
  product.addEventListener("click", (e) => {
    const quantity = product.querySelector("#product-quantity");

    if (e.target.classList.contains("fa-minus")) {
      if (quantity.innerText > 1) {
        quantity.innerText--;
        priceText.innerText = (singlePrice * quantity.innerText).toFixed(2);
        loading.style.visibility = "visible";
        setTimeout(totalPrice, 1000);
      } else {
        confirm("Are you sure to remove product from cart?")
          ? (product.remove(),
            (loading.style.visibility = "visible"),
            setTimeout(totalPrice, 1000))
          : null;
      }
    }
    if (e.target.classList.contains("fa-plus")) {
      quantity.innerText++;
      priceText.innerText = (singlePrice * quantity.innerText).toFixed(2);
      loading.style.visibility = "visible";
      setTimeout(totalPrice, 1000);
    }
    if (e.target.classList.contains("remove-product")) {
      confirm("Are you sure to remove product from cart?")
        ? (product.remove(),
          (loading.style.visibility = "visible"),
          setTimeout(totalPrice, 1000))
        : null;
    }
  });
});

//   ana divden seçersek
/* if (e.target.classList.contains("fa-minus")) {
 productPrice = e.target.parentElement.parentElement.childNodes[3].innerText;
  if (e.target.parentElement.parentElement.childNodes[3].innerText > 1) {
    +e.target.parentElement.parentElement.childNodes[3].innerText--;
  }
} */
