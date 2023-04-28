const SWEDISH_KRONA_FORMATTER = new Intl.NumberFormat("sv", {
  currency: "SEK",
  style: "currency",
  currencyDisplay: "narrowSymbol" //name, code,symbol
});
function formatKrona(price) {
  return SWEDISH_KRONA_FORMATTER.format(price);
}
const tbody = document.querySelector("tbody");
const adminNewProductBtn = document.getElementById("adminNewProductBtn");
let products;
function remove(id){
    fetch(`/api/products/${id}`, {
      method: "DELETE"
    }).then(() => {
      localStorage.setItem("basketItems", JSON.stringify([]));
      update();
    });
}
function goto(id){
  location.href = `view-product.html?id=${id}`;
}
update();



function update() {

  fetch("/api/products").then(resp => resp.json()).then(data => {
    products = data;
    tbody.innerHTML = "";

  products.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="textTd" onclick="goto(${item.id})">${item.name}</td>
                  <td class="textTd" onclick="goto(${item.id})">${item.sku}</td>
                  <td class="textTd" onclick="goto(${item.id})">${formatKrona(item.price)}</td>
                  <td class="controlBtn">
                    <button type="button" onclick="remove('${item.id}')" class="adminBtn" id="removeBtn">Radera</button>
                  </td>
    `;
    tbody.appendChild(tr);
  });
  });
}
adminNewProductBtn.addEventListener('click',()=>{
  location.href="new-product.html"
})
