var storedNames = JSON.parse(localStorage.getItem("selectMovies"))

window.onload = function(){

    for(var i = 0; i < storedNames.length; i++){
        document.getElementById("tbody").innerHTML += `<tr>
                                                            <td>
                                                                    <button class="fa fa-close" style="border-style: hidden; background-color: white; color: red;"></button>
                                                                    ${storedNames[i].title}
                                                            </td>
                                                            <td id="tableUnitPrice">${storedNames[i].price}</td>
                                                            <td>
                                                                    <button class="fa fa-toggle-left" id="decreaseAmount" style="border-style: hidden; background-color: white;"></button>
                                                                    <div id="quantityAmount">${storedNames[i].amount}</div>
                                                                    <button class="fa fa-toggle-right" style="border-style: hidden; background-color: white;" onclick="increaseQuantity()"></button>
                                                            </td>
                                                            <td id="rowTotal"></td>
                                                        </tr>`
    }
}

let oQuantity = 1;
const quantity = document.getElementById("quantityAmount");
quantity.innerHTML = oQuantity;

document.getElementById("decreaseAmount").addEventListener("click",function(){
    quantity.innerHTML = --oQuantity;
})

function increaseQuantity(){
    quantity.innerHTML = ++oQuantity;
}
