// product.html links to product.js. Display each property of the object in product.js using HTML.
// Provide a default value for the price property if it is missing.
// If the product is on sale, underline the name.
// Change the properties in the object to test your code.

const product = {
  name: "Fancy Product",
  //   price: 99,
  onSale: true,
};

const productContainer = document.querySelector(".container");

let prodPrice = "N/A";
if (product.price !== undefined) {
  prodPrice = product.price;
}

let decoration = "none";
if (product.onSale) {
  decoration = "underline";
}

productContainer.innerHTML += `<div class="product"> 
                                <h3 class"name" style=text-decoration:${decoration}>Name: ${product.name}</h3> 
                                <p class"price">Price: ${prodPrice}</p>
                                </div>`;
