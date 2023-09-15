const cart: string[] = [];

function addToCart(product: string) {
  cart.push(product);
}

function order() {
  let product: string = ""
  while (product != "0") {
    product = prompt("enter order 'or enter 0 to quit': ");
    if (product === "0") {
      return;
    }
    addToCart(product);
  }
}

order();

function showCart() {
  console.log("Your order is:");
  for (let i = 0; i < cart.length; i++) {
    console.log(cart[i]);
  }
}

showCart();
