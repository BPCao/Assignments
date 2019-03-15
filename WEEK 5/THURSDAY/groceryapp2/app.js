let storeSelect = document.getElementById("storeSelect")
let submit = document.getElementById("submit")
let deleteStore = document.getElementById("deleteStore")
let storeList = document.getElementById("storeList")
let database = firebase.database()

let groceryStores = database.ref("Grocery Stores")

// User should be able to add the grocery category 
// User should be able to add grocery items to a particular category
// User should be able to view the grocery items based on the grocery category
// User should be able to remove items from the grocery list 

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
        return `<div>
                <li>${store.Store}</li>
                <input type="text" placeholder="Item Name">
                <ul></ul>
                <button onclick=addItem()>Add item</button>
                </div>`
      })
    storeList.innerHTML = storeItems.join("")
})

function addItem() {
    this.innerHTML = `<li>${previousSibling.previousSibling.value}</li>
                      <button onclick=delItem()>Remove Item</button>`
}

function removeItem() {
    previousSibling.remove
}