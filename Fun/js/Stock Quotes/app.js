let company = document.getElementById("company")
let submitbtn = document.getElementById("submitbtn")
let container = document.getElementById("container")


submitbtn.addEventListener('click', function () {
    companyName = company.value;
    function ticker() {
        let quote = getStockQuote(companyName);
        spammer = document.createElement("li");
        container.appendChild(spammer);
        spammer.innerHTML = `${quote.name} - ${quote.price}`;
    }
    setInterval(ticker, 2000);
});



