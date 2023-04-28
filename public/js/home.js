const SWEDISH_KRONA_FORMATTER = new Intl.NumberFormat("sv", {
  currency: "SEK",
  style: "currency",
  currencyDisplay: "narrowSymbol" //name, code,symbol
});
function formatKrona(price) {
  return SWEDISH_KRONA_FORMATTER.format(price);
}


const productCards = document.getElementById('productCards');
let products =[];

update();

fetch("/api/products")
  .then((resp) => resp.json())
  .then((data) => {
    products = data;
    productCards.innerHTML="";
    products.forEach(item=>{
        const productCardElement = document.createElement('div');
        productCardElement.classList.add("productCard");
        productCardElement.innerHTML=`<a href="product-details.html?id=${item.id}">
          <img src="${item.imageUrl}" alt="Produktens bild" class="productPhoto">
          <img src="./img/heart.png" alt="" class="likeFig">
          <div class="productInfo">
            <span class="productTitle">${item.name}</span>
            <span class="productPrice">${formatKrona(item.price)}</span>
          </div>
        </a>`;
        productCards.appendChild(productCardElement);
    })

  });






function getBasketItems() {
    let basketItems = JSON.parse(localStorage.getItem("basketItems")) ?? [];
    return basketItems;
}
function update(){
    if(getBasketItems().length){
        const basketBtn = document.getElementById('basketBtn');
        let basketItemsCounter = 0;
        getBasketItems().forEach(item => {
            basketItemsCounter+=item.quantity;
        });
        const basketItemsCounterElement = document.createElement('div');
        basketItemsCounterElement.innerText=basketItemsCounter;
        basketItemsCounterElement.classList.add('basketItemsCounter');
        basketBtn.innerHTML="";
        basketBtn.appendChild(basketItemsCounterElement);
    }
}