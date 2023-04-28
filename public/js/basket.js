const SWEDISH_KRONA_FORMATTER = new Intl.NumberFormat("sv", {
  currency: "SEK",
  style: "currency",
  currencyDisplay: "narrowSymbol" //name, code,symbol
});
function formatKrona(price) {
  return SWEDISH_KRONA_FORMATTER.format(price);
}
const basketBtn = document.getElementById('basketBtn');
const totalPrice = document.getElementById('totalPrice');
const tbody = document.querySelector("tbody");
let products;

fetch("/api/products")
    .then((resp) => resp.json())
    .then((data) => {
    products=data;
    update();
    })


function increase(id){
            let basketItems = JSON.parse(localStorage.getItem("basketItems"));
            basketItems.forEach(item=>{
                if(item.id==id){
                    item.quantity++;
                }
            });
            localStorage.setItem("basketItems", JSON.stringify(basketItems));
            update();
    }
function decrease(id){
            let basketItems = JSON.parse(localStorage.getItem("basketItems"));
            basketItems.forEach((item,index)=>{
                if(item.id==id){
                    if(item.quantity==1){
                        basketItems.splice(index,1);
                        localStorage.setItem("basketItems", JSON.stringify(basketItems));
                        if(getBasketItems().length==0){
                           basketBtn.innerHTML="";
                        }
                        }else{
                    item.quantity--
                    }
                    }
                
            });
            localStorage.setItem("basketItems", JSON.stringify(basketItems));
            update();
    }
function update(){
    tbody.innerHTML="";
    if(getBasketItems().length){
        let basketItemsCounter = 0;
        getBasketItems().forEach(item => {
            basketItemsCounter+=item.quantity;
            currentProduct=products.find(cProduct=>cProduct.id==item.id);
            const tr = document.createElement("tr");


    let tdName = document.createElement("td");
    tdName.classList.add("textTd");
    tdName.innerText = currentProduct.name;

    let tdPrice = document.createElement("td");
    tdPrice.classList.add("textTd");
    tdPrice.innerText = formatKrona(currentProduct.price);

    let tdQuantity = document.createElement("td");
    tdQuantity.classList.add("textTd");
    tdQuantity.innerText = item.quantity;

    let tdTotal = document.createElement("td");
    tdTotal.classList.add("textTd");
    tdTotal.innerText = formatKrona(item.quantity * currentProduct.price);
    



    let tdIncDec = document.createElement("td");
    tdIncDec.classList.add("controlBtn");
    tdIncDec.innerHTML = `<button type="button" onclick="increase('${currentProduct.id}')" class="incDecBtn">+</button>
            <button type="button" onclick="decrease('${currentProduct.id}')" class="incDecBtn" >-</button>`;

    tr.append(tdName, tdPrice,tdQuantity, tdTotal, tdIncDec);
    tbody.appendChild(tr);


    // tr.innerHTML = `
    //   <td class="textTd">${currentProduct.name}</td>
    //   <td class="textTd">${formatKrona(currentProduct.price)}</td>
    //   <td class="textTd">${item.quantity}</td>
    //   <td class="textTd">${formatKrona(item.quantity * currentProduct.price)}</td>
    //   <td class="controlBtn">
    //         <button type="button" onclick="increase('${currentProduct.id}')" class="incDecBtn">+</button>
    //         <button type="button" onclick="decrease('${currentProduct.id}')" class="incDecBtn" >-</button>
    //   </td>
    // `;
    // tbody.appendChild(tr);

        const basketItemsCounterElement = document.createElement('div');
        basketItemsCounterElement.innerText=basketItemsCounter;
        basketItemsCounterElement.classList.add('basketItemsCounter');
        basketBtn.innerHTML="";
        basketBtn.appendChild(basketItemsCounterElement);

})

    }
    if(getBasketItems()){
        let tPrice=0;
        let currentProduct;
        getBasketItems().forEach(item=>{
            currentProduct=products.find(cProduct=>cProduct.id == item.id);
            tPrice+=item.quantity * currentProduct.price ;
        })

          totalPrice.innerText=`Totalt pris:${formatKrona(tPrice)}`;
    }
  
}
function getBasketItems() {
    let basketItems = JSON.parse(localStorage.getItem("basketItems")) ?? [];
    return basketItems;
}