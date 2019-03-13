let email = document.getElementById("email");
let showAll = document.getElementById("showAll");
let searchButton = document.getElementById("searchButton");
let orderList = document.getElementById("orderList");
let newOrder = document.getElementById("newOrder");
let idNumber = document.getElementById("idNumber");
let address = document.getElementById("address");
let strength = document.getElementById("strength");
let size = document.getElementById("size");
let flavor = document.getElementById("flavor");
let delOrder = document.getElementsByClassName("delOrder");
let coffeeLink = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"
let filterLink = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/emailaddress"

showAll.addEventListener('click', function() {
    console.log('test')
    fetch(coffeeLink, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
    },
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        console.log(Object.keys(json))
    let keys = Object.keys(json)
        console.log(keys)
    let orders = keys.map(function (key) {
        // console.log(json[key])
        return `<li>
                    <div class="orderBox">
                        <p>email: ${json[key].emailAddress}:</p>
                        <span>Order: ${json[key].coffee}</span>
                    </div>
                </li>`

    })
    orderList.innerHTML = orders.join("")
    })
})


// Unable to complete delete functionality
delOrder.addEventListener('click', function(){
    fetch(filterLink, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
    },
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
    console.log(Object.keys(json))
    let keys = Object.keys(json)
    console.log(keys)
    let orders = keys.filter(function (key) {
        return `<li>
                <div class="orderBox">
                <p>email: ${json[key].emailAddress}:</p>
                <span>Order: ${json[key].coffee}</span>
                </div>
                </li>`
            })
    orderList.removeChild(orders)
    })
})

searchButton.addEventListener('click', function() {
    console.log('test')
    fetch(filterLink)
    .then(function (response) {
        return response.json()
    })
    .then(function (coffeeList) {
        for (let customer in coffeeList) {
            let order = coffeeList[customer]
            if (email.value == customer) {
                orderList.innerHTML += `<li>${order._id}</li>
                <li>${order.emailAddress}</li>
                <li>${order.coffee}</li>
                <li>${order.strength}</li>
                <li>${order.size}</li>
                <li>${order.flavor}</li>
                <li>${order._v}</li>` 
            }
        }
    })
})

newOrder.addEventListener('click', function() {
    fetch(coffeeLink, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
            emailAddress : address.value,
            coffee : flavor.value,
        }) 
    })
    .then(function (response) {
        return response.json()
    })
})
   
