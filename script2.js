var storedNames = JSON.parse(localStorage.getItem("selectMovies"))
console.log(storedNames)

document.getElementById("tbody").innerHTML += `<tr>
<td>
    <button class="fa fa-close" style="border-style: hidden; background-color: white; color: red;"></button>
    ${storedNames[0].title}</td>
<td id="tableUnitPrice">120</td>
<td>
    <button class="fa fa-toggle-left" style="border-style: hidden; background-color: white;" onclick="decreaseQuantity()"></button>
    <div id="quantityAmount">0</div>
    <button class="fa fa-toggle-right" style="border-style: hidden; background-color: white;" onclick="increaseQuantity()"></button>
</td>
<td id="rowTotal">
</td>
</tr>`

let oQuantity = 0;
let total = 0;
const quantity = document.getElementById("quantityAmount");
const stringquantity = document.getElementById("quantityAmount").textContent;
const intquantity = parseFloat(stringquantity);
const unitPrice = movie[0].ticket_price;
const totalAmount = document.getElementById("rowTotal");
quantity.innerHTML = oQuantity;
totalAmount.innerHTML = total;

function increaseQuantity(){

    quantity.innerHTML = ++oQuantity;
    totalAmount.textContent = unitPrice * intquantity;

}

function decreaseQuantity(){
    quantity.innerHTML = --oQuantity;
}

function rowTotal(){
    let rowTotalAmount = unitPrice * quantity

    return rowTotalAmount;
    //rowTotalAmount =  document.getElementById("rowTotal").innerHTML;
}

console.log(stringquantity)
console.log(intquantity)
console.log(unitPrice)
console.log(intquantity*unitPrice)