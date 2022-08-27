// The index.html file links to products.js. Loop through the array in products.js and display each object using HTML.
// Provide a default value for the price property if it is missing.
// If the product is sold out, display its name in red otherwise display it in green.
// Change the properties in the objects in the array to test your code.

const products = [
  {
    name: "Fancy Product",
    price: 40,
    soldOut: true,
  },
  {
    name: "Another Product",
    soldOut: false,
  },
  {
    name: "Cheap Product",
    price: 10,
    soldOut: true,
  },
];

const productContainer = document.querySelector(".container");

let html = "";

for (let i = 0; i < products.length; i++) {
  let displayPrice = "Unavailable";

  if (products[i].price) {
    displayPrice = products[i].price;
  }

  let decoration = "green";

  if (products[i].soldOut) {
    decoration = "red";
  }

  html += `<div class="product">
            <h3 style="color:${decoration}">${products[i].name}</h3>
            <p>Price: ${displayPrice}</p>
             </div>`;
}

productContainer.innerHTML = html;
