const SWEDISH_KRONA_FORMATTER = new Intl.NumberFormat("sv", {
  currency: "SEK",
  style: "currency",
  currencyDisplay: "narrowSymbol" //name, code,symbol
});
function formatKrona(price) {
  return SWEDISH_KRONA_FORMATTER.format(price);
}

const searchMainContainer = document.getElementById('searchMainContainer');
const productCards = document.getElementById('productCards');

const queryString = window.location.href;
const urlParams = queryString.split("q=");
const searchTerm = urlParams[urlParams.length - 1];
let searchResults =[];

        fetch(`/api/search?q=${searchTerm}`)
          .then(response => response.json())
          .then(result => {
            console.log(result);
            searchResults=result;
    update();

    productCards.innerHTML="";
    searchResults.forEach(item=>{
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
    let str = searchResults.length>1 ? "träffar" : "träff";
    const searchTitle = document.getElementById('searchTitle')
    searchTitle.innerText=` ${searchResults.length} ${str} på "${searchTerm}"`;
}
