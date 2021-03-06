let menu = document.getElementById('menu');
let all = document.getElementById('all');
let starterbtn = document.getElementById('starterbtn');
let entreebtn = document.getElementById('entreebtn');
let dessertbtn = document.getElementById('dessertbtn');

all.addEventListener('click', function () {

    let dishList = dishes.map(function (dish) {

        return `<li class="bullet"><h3>${dish.title}</h3>
            <p>${dish.description}</p>
            <p>$${dish.price}</p>
            <img src="${dish['imageURL']}">
            </li>`
    })

    menu.innerHTML = dishList.join('')

})

starterbtn.addEventListener('click', function () {

    let startfilter = dishes.filter(function (dish) {
        return dish['course'] == 'Starters'
    })

    let startlst = startfilter.map(function (dish) {

        return `<li class="bullet"><h3>${dish.title}</h3>
            <p>${dish.description}</p>
            <p>$${dish.price}</p>
            <img src="${dish['imageURL']}">
            </li>`
    });

    menu.innerHTML = startlst.join('')

})

entreebtn.addEventListener('click', function () {

    let entreefilter = dishes.filter(function (dish) {
        return dish['course'] == 'Entrees'
    })

    let entreelst = entreefilter.map(function (dish) {

        return `<li class="bullet"><h3>${dish.title}</h3>
            <p>${dish.description}</p>
            <p>$${dish.price}</p>
            <img src="${dish['imageURL']}">
            </li>`
    });

    menu.innerHTML = entreelst.join('')

})

dessertbtn.addEventListener('click', function () {

    let dessertfilter = dishes.filter(function (dish) {
        return dish['course'] == 'Desserts'
    })

    let dessertlst = dessertfilter.map(function (dish) {

        return `<li class="bullet"><h3>${dish.title}</h3>
            <p>${dish.description}</p>
            <p>$${dish.price}</p>
            <img src="${dish['imageURL']}">
            </li>`
    });

    menu.innerHTML = dessertlst.join('')

})


