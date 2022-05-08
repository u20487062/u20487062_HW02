function loadCart() {
    storedNames = JSON.parse(localStorage.getItem('selectMovies'));
  
}

if (localStorage.getItem("selectMovies") != null) {
    loadCart();
  
}

var ticketCart = localStorage.getItem("numberInCart");
document.getElementById("ticketCount").innerHTML = ticketCart;


window.onload = function(){

   if(storedNames.length == 0){
       document.getElementById("tbody").innerHTML += '<tr>No movies in your cart</tr>'
   }

   else{

    for(var i = 0; i < storedNames.length; i++){
        document.getElementById("tbody").innerHTML += `<tr>
                                                            <td>
                                                                    <button class="fa fa-close" style="border-style: hidden; background-color: white; color: red;" onclick="RemoveRow()"></button>
                                                                    ${storedNames[i].title}
                                                            </td>
                                                            <td id="tableUnitPrice">${storedNames[i].price}</td>
                                                            <td>
                                                                    <button class="fa fa-toggle-left" id="decreaseAmount" style="border-style: hidden; background-color: white;" onclick="decreaseQuantity()"></button>
                                                                    <div id="quantityAmount">${storedNames[i].amount}</div>
                                                                    <button class="fa fa-toggle-right" id ="increaseAmount" style="border-style: hidden; background-color: white;" onclick="increaseQuantity()"></button>
                                                            </td>
                                                            <td id="rowTotal"></td>
                                                        </tr>`
    }

   }
}

let oQuantity = 0;

function increaseQuantity(){
    document.getElementById("quantityAmount").innerHTML = `${oQuantity++}`
}

function decreaseQuantity(){
    document.getElementById("quantityAmount").innerHTML = `${oQuantity--}`
}

function RemoveRow() {
    var td = event.target.parentNode; 
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}
