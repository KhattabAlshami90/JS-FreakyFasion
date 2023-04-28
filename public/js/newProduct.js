const regex = /^[A-Z]{3}[1-9]{2}-[A-Z]{2}$/;
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const product = new Product(
    this.productName.value,
    this.productDescription.value,
    this.productImg.value,
    this.productSKU.value,
    this.productPrice.value
  );
  saveProduct(product);
});

class Product {
  constructor(name, description, imageUrl, sku, price) {
    if (name.trim() == "" || name == null || name.trim().length > 50) {
      throw new Error(
        "Name should not be null, empty, white space or more than 50 characters!"
      );
    } else {
      this.name = name.trim();
    }

    this.description = description;
    this.imageUrl = imageUrl;
    if (regex.test(sku.trim())) {
      this.sku = sku.trim();
    } else {
      throw new Error(
        "SKU should be XXXYY-XX  where X is a letter between A to Z, and Y is a number between 1-9"
      );
    }
    if (price >= 0) {
      this.price = price;
    } else {
      throw new Error("The price should not be negative!");
    }
  }
}

function saveProduct(product) {
  fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  }).then(resp => {
    location.href = "/admin/products/dashboard.html";
  });
}
