let movie = [
    {
        id: 1,
        title: 'The Batman',
        director: 'Matt Reeves',
        runtime: '2h 56m',
        release_year: 2022,
        description: 'Batman ventures into Gotham City is underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator is plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis.',
        poster_url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo',
        cinema_number: 1,
        ticket_price: 110.00,
        tickets_in_cart: 0
        
    }
]

var storedNames = JSON.parse(localStorage.getItem("selectMovies"))
console.log(storedNames[0].title)

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