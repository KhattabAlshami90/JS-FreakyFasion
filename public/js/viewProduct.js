const SWEDISH_KRONA_FORMATTER = new Intl.NumberFormat("sv", {
  currency: "SEK",
  style: "currency",
  currencyDisplay: "narrowSymbol" //name, code,symbol
});
function formatKrona(price) {
  return SWEDISH_KRONA_FORMATTER.format(price);
}



const productTitle = document.getElementById("productTitle");
const productDescriptionPara = document.getElementById(
  "productDescriptionPara"
);
const productIMGPara = document.getElementById("productIMGPara");
const productSKUPARA = document.getElementById("productSKUPARA");
const productPricePara = document.getElementById("productPricePara");
const adminRemoveProductBtn = document.getElementById("adminRemoveProductBtn");

const queryString = window.location.href;
const urlParams = queryString.split("id=");
const productId = parseInt(urlParams[urlParams.length - 1]);
let product;

fetch(`/api/products/${productId}`).then(resp => resp.json()).then(data => {
  product = data;
  document.title = product.name;
  update();
});
adminRemoveProductBtn.addEventListener("click", () => {
  fetch(`/api/products/${productId}`, { method: "DELETE" }).then(() => {
    localStorage.setItem("basketItems", JSON.stringify([]));
    location.href = `dashboard.html`;
  });
});
function update() {
  productTitle.innerText = product.name;
  productDescriptionPara.innerText = product.description;
  productIMGPara.innerText = product.imageUrl;
  productSKUPARA.innerText = product.sku;
  productPricePara.innerText = formatKrona(product.price);
}
