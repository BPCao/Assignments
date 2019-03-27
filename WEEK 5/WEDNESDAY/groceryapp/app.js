let storeSelect = document.getElementById("storeSelect")
let submit = document.getElementById("submit")
let deleteStore = document.getElementById("deleteStore")
let storeList = document.getElementById("storeList")
let database = firebase.database()

// * User should be able to add the grocery category (Walmart, HEB, Fiesta, Sams Club etc)  
// * User should be able to view all grocery categories 
// * User should be able to delete grocery categories
// * Items must be stored in Firebase database 
// * The website should be mobile responsive 

let groceryStores = database.ref("Grocery Stores")

submit.addEventListener('click', function () {
    groceryStores.push({
        Store: storeSelect.value
    })
});

groceryStores.on('value', function (snapshot) {
    let storeArray = []
    snapshot.forEach((childSnapshot) => {
        storeArray.push(childSnapshot.val())
      })
    let storeItems = storeArray.map((store) => {
        // console.log(store)
        return `<li>${store.Store}</li>`
      })
    storeList.innerHTML = storeItems.join("")
})

deleteStore.addEventListener('click', function () {
    groceryStores.map((store) => {
        if (storeSelect.value == store) {
            store.remove()
            console.log(store.Store)
        return storeArray    
        }
    })
})








