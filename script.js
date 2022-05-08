var selectedMovies = [];
let movies = [
    
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
    },

    {
    id: 2,
    title: 'Spider-Man: No Way Home',
    director: 'Jon Watts',
    runtime: '2h 28m',
    release_year: 2021,
    description: 'Peter Parker seeks Doctor Stranges help to make people forget about Spidermans identity. However, when the spell he casts gets corrupted, several unwanted guests enter their universe.',
    poster_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z',
    cinema_number: 2,
    ticket_price: 100.00,
    tickets_in_cart: 0
    },

    {
    id: 3,
    title: 'Bee Movie',
    director: 'Simon J. Smith & Steve Hickner',
    runtime: '1h 31m',
    release_year: 2007,
    description: 'Barry B Benson, a bee who has just completed his graduation, decides to sue humans after he learns about the exploitation of bees at the hands of mankind.',
    poster_url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVilfbFkOjmBRb6iPr0bF0cRVNV1oYuxfRIVJj8G5RayNXIXp2',
    cinema_number: 3,
    ticket_price: 150.00,
    tickets_in_cart: 0
    },

    {
    id: 4,
    title: 'Shrek 2',
    director: 'Andrew Adamson, Conrad Vernon & Kelly Asbury',
    runtime: '1h 33m',
    release_year: 2004,
    description: 'When Shrek and Fiona return from their honeymoon, her parents, the rulers of Far Far Away, invite them over. But as the king does not like Shrek, he enlists a fairy to keep him away from his daughter.',
    poster_url: 'https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/shrek-2-2004/large_akWDA0BMVYK4OTM92T5i91DYnsT.jpg',
    cinema_number: 4,
    ticket_price: 2000.00,
    tickets_in_cart: 0
    }
];
//coding insert for index

document.getElementById("movie1").innerHTML += `<div class="card" style="width:300px; height: 980px">
                                                    <div class="card-header">Cinema ${movies[0].cinema_number}</div>
                                                    <img class="card-img-top" src="${movies[0].poster_url}" style="width:100%">
                                                    <div class="card-body">
                                                        <h4 class="card-title" id="movieTitle1">${movies[0].title}</h4>
                                                        <p class="card-text" style="height: 260px">${movies[0].description}</p>
                                                        <p class="card-text" style="text-align:right; font-size: 20px" id="unitPrice1"><strong>R${movies[0].ticket_price}</strong></p>
                                                    <div class="card-footer">
                                                        <button type="button" class="btn btn-primary" id="detailsBTN" data-bs-toggle="modal" data-bs-target="#myModal1">Show Details</button><br><br>
                                                        <button type="button" class="btn btn-primary" id="bookBTN">BOOK TICKET</button>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="modal" id="myModal1">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h3 class="modal-title">${movies[0].title}</h3>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <ul>
                                                                    <li><strong>Title:</strong> ${movies[0].title}</li><br>
                                                                    <li><strong>Director/s:</strong> ${movies[0].director}</li><br>
                                                                    <li><strong>Release Year:</strong> ${movies[0].release_year}</li><br>
                                                                    <li><strong>Runtime:</strong> ${movies[0].runtime}</li><br>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`


document.getElementById("movie2").innerHTML += `<div class="card" style="width:300px; height: 980px">
                                                    <div class="card-header">Cinema ${movies[1].cinema_number}</div>
                                                    <img class="card-img-top" src="${movies[1].poster_url}" style="width:100%">
                                                    <div class="card-body">
                                                        <h4 class="card-title" id="movieTitle2">${movies[1].title}</h4>
                                                        <p class="card-text" style="height: 230px">${movies[1].description}</p>
                                                        <p class="card-text" style="text-align:right; font-size: 20px" id="unitPrice2"><strong>R${movies[1].ticket_price}</strong></p>
                                                    <div class="card-footer">
                                                        <button type="button" class="btn btn-primary" id="detailsBTN" data-bs-toggle="modal" data-bs-target="#myModal2">Show Details</button><br><br>
                                                        
                                                        <button type="button" class="btn btn-primary" id="bookBTN2">BOOK TICKET</button>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="modal" id="myModal2">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h3 class="modal-title">${movies[1].title}</h3>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <ul>
                                                                    <li><strong>Title:</strong> ${movies[1].title}</li><br>
                                                                    <li><strong>Director/s:</strong> ${movies[1].director}</li><br>
                                                                    <li><strong>Release Year:</strong> ${movies[1].release_year}</li><br>
                                                                    <li><strong>Runtime:</strong> ${movies[1].runtime}</li><br>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`


document.getElementById("movie3").innerHTML += `<div class="card" style="width:300px; height: 980px">
                                                    <div class="card-header">Cinema ${movies[2].cinema_number}</div>
                                                    <img class="card-img-top" src="${movies[2].poster_url}" style="width:100%">
                                                    <div class="card-body">
                                                        <h4 class="card-title" id="movieTitle3">${movies[2].title}</h4>
                                                        <p class="card-text" style="height: 253px">${movies[2].description}</p>
                                                        <p class="card-text" style="text-align:right; font-size: 20px" id="unitPrice3"><strong>R${movies[2].ticket_price}</strong></p>
                                                    <div class="card-footer">
                                                        <button type="button" class="btn btn-primary" id="detailsBTN" data-bs-toggle="modal" data-bs-target="#myModal3">Show Details</button><br><br>
                                                        <button type="button" class="btn btn-primary" id="bookBTN3">BOOK TICKET</button>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="modal" id="myModal3">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h3 class="modal-title">${movies[2].title}</h3>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <ul>
                                                                    <li><strong>Title:</strong> ${movies[2].title}</li><br>
                                                                    <li><strong>Director/s:</strong> ${movies[2].director}</li><br>
                                                                    <li><strong>Release Year:</strong> ${movies[2].release_year}</li><br>
                                                                    <li><strong>Runtime:</strong> ${movies[2].runtime}</li><br>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`


document.getElementById("movie4").innerHTML += `<div class="card" style="width:300px; height: 980px">
                                                    <div class="card-header" id="cinema_title">Cinema ${movies[3].cinema_number}</div>
                                                    <img class="card-img-top" src="${movies[3].poster_url}" style="width:100%">
                                                    <div class="card-body">
                                                        <h4 class="card-title" id="movieTitle4">${movies[3].title}</h4>
                                                        <p class="card-text" style="height: 253px">${movies[3].description}</p>
                                                        <p class="card-text" style="text-align:right; font-size: 20px" id="unitPrice4"><strong>R${movies[3].ticket_price}</strong></p>
                                                    <div class="card-footer">
                                                        <button type="button" class="btn btn-primary" id="detailsBTN" data-bs-toggle="modal" data-bs-target="#myModal4">Show Details</button><br><br>
                                                        <button type="button" class="btn btn-primary" id="bookBTN4">BOOK TICKET</button>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div class="modal" id="myModal4">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h3 class="modal-title">${movies[3].title}</h3>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <ul>
                                                                    <li><strong>Title:</strong> ${movies[3].title}</li><br>
                                                                    <li><strong>Director/s:</strong> ${movies[3].director}</li><br>
                                                                    <li><strong>Release Year:</strong> ${movies[3].release_year}</li><br>
                                                                    <li><strong>Runtime:</strong> ${movies[3].runtime}</li><br>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>`                                                



//functions to enable JS
window.onload = function(){

    let count = 0;
    const textHolder = document.getElementById("ticketCount");
    textHolder.innerHTML = count;

    function saveToCart(){
        localStorage.setItem("selectMovies",JSON.stringify(selectedMovies))
    }

    function savePrice(){
        localStorage.setItem("numberInCart", count)
    }

    function addMovie1(){
        var movieTitle = document.getElementById("movieTitle1").textContent;
        var unitPrice = document.getElementById("unitPrice1").textContent;
        var quantity = movies[0].tickets_in_cart;

        selectedMovies.push({title: movieTitle, price: unitPrice, amount: quantity});
        saveToCart();
    }

    function addMovie2(){
        var movieTitle = document.getElementById("movieTitle2").textContent;
        var unitPrice = document.getElementById("unitPrice2").textContent;
        var quantity = movies[0].tickets_in_cart;

        selectedMovies.push({title: movieTitle, price: unitPrice, amount: quantity});
        saveToCart();
    }

    function addMovie3(){
        var movieTitle = document.getElementById("movieTitle3").textContent;
        var unitPrice = document.getElementById("unitPrice3").textContent;
        var quantity = movies[0].tickets_in_cart;

        selectedMovies.push({title: movieTitle, price: unitPrice, amount: quantity});
        saveToCart();
    }

    function addMovie4(){
        var movieTitle = document.getElementById("movieTitle4").textContent;
        var unitPrice = document.getElementById("unitPrice4").textContent;
        var quantity = movies[0].tickets_in_cart;

        selectedMovies.push({title: movieTitle, price: unitPrice, amount: quantity});
        saveToCart();
    }

    document.getElementById("bookBTN").addEventListener("click", function() {
        textHolder.innerHTML = ++count;
        movies[0].tickets_in_cart += 1;
        addMovie1();
        savePrice(); 
    });


    document.getElementById("bookBTN2").addEventListener("click", function() {
        textHolder.innerHTML = ++count;
        movies[1].tickets_in_cart += 1;
        addMovie2();
        savePrice();
      
    });
    document.getElementById("bookBTN3").addEventListener("click", function() {
        textHolder.innerHTML = ++count;
        movies[2].tickets_in_cart += 1;
        addMovie3();
        savePrice();
      
    });
    document.getElementById("bookBTN4").addEventListener("click", function() {
        textHolder.innerHTML = ++count;
        movies[3].tickets_in_cart += 1;
        addMovie4();
        savePrice();
      
    });
}

