import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-5e244-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListinDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const listOfItems = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(shoppingListinDB, inputValue)
    clearInput()
    addToList(inputValue)
})

onValue(listOfItems, function(snapshot) {
    console.log(snapshot.val())
})

function clearInput() {
    inputFieldEl.value = ""
}

function addToList(itemValue) {
    listOfItems.innerHTML += `<li>${ itemValue }</li>`
}