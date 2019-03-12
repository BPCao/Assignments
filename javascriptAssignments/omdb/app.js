let btnFetchMovie = document.getElementById("btnFetchMovie")
let batmanLst = document.getElementById("batmanLst")
let webHeader = document.getElementById("webHeader")
let batmanDetails = document.getElementById("batmanDetails")

btnFetchMovie.addEventListener('click', function () {
    let batman = "http://www.omdbapi.com/?s=batman&apikey=1fa340be";
    let request = new XMLHttpRequest();
    request.open("GET", batman);
    request.send();
    request.onload = function () {
        if (request.status != 200) {
            // console.log("Server not found.");
        }
        else {
            // console.log("Response Recieved");
            // console.log(request.responseText);
            // console.log(JSON.parse(request.responseText));
            let moviesResponse = JSON.parse(request.responseText);
            displayMovies(moviesResponse);
        }
    };
});

function displayMovies(movie) {
    let batmanLstItems = movie.Search.map(function (movie) {
        return `<li class ="batmanBullets">${movie.Title}</li>
                <img class="batmanPoster" src="${movie.Poster}">
                <li>${movie.Year}</li>
                <button class="details" onclick="getMovieDetails('${movie.imdbID}')">
                More Info</button>`
    })
    batmanLst.innerHTML = batmanLstItems.join('')
}

function getMovieDetails(imdbID) {
    let request = new XMLHttpRequest();
    let detailLink = "http://www.omdbapi.com/?i=" + imdbID + "&apikey=1fa340be";
    request.open("GET", detailLink);
    request.send();
    request.onload = function () {
        if (request.status != 200) {
            console.log("Server not found.");
        }
        else {
            // console.log("Response Recieved");
            // console.log(request.responseText);
            console.log(JSON.parse(request.responseText))
            let detailsResponse = JSON.parse(request.responseText)
            let itemDetails = displayMovieDetails(detailsResponse)
            batmanDetails.innerHTML = itemDetails.join('')
        };
    };
}

function displayMovieDetails(detailsResponse) {
    return `<div>
            ${detailsResponse.Year}
            ${detailsResponse.Rated}
            ${detailsResponse.Director}
            </div>`
}