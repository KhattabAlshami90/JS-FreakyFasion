const SWEDISH_KRONA_FORMATTER = new Intl.NumberFormat("sv", {
  currency: "SEK",
  style: "currency",
  currencyDisplay: "narrowSymbol" //name, code,symbol
});
function formatKrona(price) {
  return SWEDISH_KRONA_FORMATTER.format(price);
}


const queryString = window.location.href;
const urlParams = queryString.split('id=');
const productId = parseInt( urlParams[urlParams.length - 1]);
const productContainer = document.getElementById("product");
let CTRLBtn=`<button type="button" class="primaryBtn" id="addBasketItemBtn">Lägg i varukorg</button>`;
let alreadyInBasket=false;
let product;

fetch(`/api/products/${productId}`).then(resp => resp.json()).then(data => {
    product=data;
    document.title=product.name;
  update();
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
            basketItemsCounter+=item.quantity;//Om man vill ha antal olika produkter:basketItemsCounter++;
            if(item.id==productId){
                alreadyInBasket=true;
        CTRLBtn=` <div class="adminCTRLBtn">
        <div class="admin-inc-dec">
            <button type="button" class="primaryBtn" id="decBtn">-</button>
            <span>${item.quantity}</span>
            <button type="button" class="primaryBtn" id="incBtn">+</button>
        </div>
        <button type="button" class="primaryBtn" id="removeBtn">Radera</button>
        </div>`;
        
            }else{
                if(alreadyInBasket)return;
            
            alreadyInBasket=false;
            CTRLBtn=`<button type="button" class="primaryBtn" id="addBasketItemBtn">Lägg i varukorg</button>`;
            }
        });
        const basketItemsCounterElement = document.createElement('div');
        basketItemsCounterElement.innerText=basketItemsCounter;
        basketItemsCounterElement.classList.add('basketItemsCounter');
        basketBtn.innerHTML="";
        basketBtn.appendChild(basketItemsCounterElement);
    }else{
        basketBtn.innerHTML="";
        alreadyInBasket=false;
        CTRLBtn=`<button type="button" class="primaryBtn" id="addBasketItemBtn">Lägg i varukorg</button>`;
        
    }

       productContainer.innerHTML = `<img src="${product.imageUrl}" alt="${product.name}"/>
    <div class="product-info">
      <h1>${product.name}</h1>
      <p>${product.description}</p>
      <span>${formatKrona(product.price)}</span>
    ${CTRLBtn}
      </div>`;
      if(alreadyInBasket){
        const incBtn = document.getElementById('incBtn');
        const decBtn = document.getElementById('decBtn');
        const removeBtn = document.getElementById('removeBtn');
        incBtn.addEventListener('click',()=>{
            let basketItems = JSON.parse(localStorage.getItem("basketItems"));
            basketItems.forEach(item=>{
                if(item.id==productId){
                    item.quantity++;
                }
            });
            localStorage.setItem("basketItems", JSON.stringify(basketItems));
            update();
        })
        decBtn.addEventListener('click',()=>{
            let basketItems = JSON.parse(localStorage.getItem("basketItems"));
            basketItems.forEach((item,index)=>{
                if(item.id==productId){
                    if(item.quantity<2){
                        basketItems.splice(index,1);
                        alreadyInBasket=false;
                    }else{
                    item.quantity--
                    }
                }
            });
            localStorage.setItem("basketItems", JSON.stringify(basketItems));
            update();
        }) 
        removeBtn.addEventListener('click',()=>{
            let basketItems = JSON.parse(localStorage.getItem("basketItems"));
            basketItems.forEach((item,index)=>{
                    if(item.id==productId){
                    basketItems.splice(index,1);
                    alreadyInBasket=false;
                }
            });
            localStorage.setItem("basketItems", JSON.stringify(basketItems));
            update();
        }) 
      }else{
          const addBasketItemBtn = document.getElementById("addBasketItemBtn");
          let basketItems=JSON.parse(localStorage.getItem("basketItems"))?? [];
          addBasketItemBtn.addEventListener("click", () => { 
            let item ={id:productId,quantity:1};
            basketItems.push(item);
            localStorage.setItem("basketItems", JSON.stringify(basketItems));
             update();
          })}
           
}

