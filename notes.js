function myFunction() {
  var header = document.getElementById("myHeader"); // Get the Header
  // Get the offset position of the navbar
  var sticky = header.offsetTop; // When the variable sticky is called, then the header stays at the top
  if (window.pageYOffset > sticky) { // If the header is hidden in anyway then add the sticky variable
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky"); // Remove sticky variable
  }
  console.log("scrolling") // To see if you're actually scrolling (for testing purposes)
  }


let costList = { // Makes a dictionary with prices of each item in the shop, makes it easy to change
  _Fried_Boccocini_Platter: {cost: 7.99},
  _Chicken_Skewers: {cost: 6.99},
  _Chicken_and_Spinach_Dumplings: {cost: 6.99},
  _Whole_Roast_Chicken: {cost: 20.99},
  _Panko_Crusted_Fish_Fillet: {cost: 18.99},
  _Rare_Beef_Steak: {cost: 20.99},
  _Lemon_Meringue_Tart: {cost: 14.99},
  _Custard_filled_Donuts: {cost: 4.99},
  _Churros_and_Ice_Cream: {cost: 6.99},
  _Prosciutto_and_BBQ_Peach_Salad: {cost: 10.99},
  _Loaded_Pasta_Salad: {cost: 11.99},
  _Green_Goodness_Salad: {cost: 9.99},

}

function cartstuff() {
let items_container = document.getElementById("items-container") // Get the whole item container which is where the cart is printed
let cart = localStorage.getItem("cart") // Get the cart
let tempcart = [] // Temperary cart for maneuvering 
if (!cart){ // If there are no items within the cart, it will say 'No Items' in the cart screen
  localStorage.setItem("cart","")
  cart = []
  node = document.createElement("p") // Paragraph to write in
  text = document.createTextNode("No Items")
  node.appendChild(text) // The text is appended
  items_container.appendChild(node) // The text is put in the item container
}else{
  cart = cart.split(",").filter(element => element); // Delete elements that are empty
  tempcart = [...new Set(cart)]; // Set the temporary cart to the new cart
  console.log(tempcart) // Print the temp cart in the html cart
  tempcart2 = cart
  cart = []
  let items={}
  tempcart.forEach(function (item, index){ //Finds the length of the cart to print number of duplicate items in cart
    cart.push(`${tempcart2.filter(x => x===item).length}x ${item}`)
    items[item.replaceAll(" ", "_")] = tempcart2.filter(x => x===item).length // Set item to how much items there are in dictionary
  });
  console.log(cart)
  localStorage.setItem("items", items) // Sets all the items to local storage so that it can be access from other pages
  console.log("localstorage set", items) // Logs the items to check if it is working
  let totalItemCost = 0
  for (const [key, value] of Object.entries(items)) { // For each of the items that are present in the cart, get the price
    console.log("getting cost of ", key) // "Getting the cost of whichever item" gets logged
    totalItemCost += costList[key].cost * value // Calculate the total cost per item
  }
  roundedtotalItemCost =  parseFloat(totalItemCost).toFixed(2); // Rounds the total item cost to 2 decimal places
  console.log("total cost", roundedtotalItemCost)

  localStorage.setItem('finalcart1', cart); // Sets the cart to local storage
  localStorage.setItem('totalItemCost', roundedtotalItemCost); // Sets the rounded value to local storage

  // carty = JSON.stringify(cart)
  // dic = {}
  // dic.carty = carty
  // localStorage.setItem('finalcart1', dic);

  console.log("cart:", cart)

  cart.forEach(function (item, index) { // For each item there is in the cart
    node = document.createElement("p") // Make a new paragraph element
    text = document.createTextNode(item) // Make a new place for item to be written in the paragraph element
    node.appendChild(text) // Write the text into the text place in the paragraph element
    items_container.appendChild(node) // Print that text and paragraph element into the item container in html
  });
}
}

document.addEventListener("DOMContentLoaded", function(event) { // Check to see if page has loaded

window.onscroll = function (e) { // When the user scrolls the page, execute myFunction
  myFunction()
  // Called when the window is scrolled.  
} 
  
  cartstuff() // Executes carstuff() function
  

  // Get the header
  document.getElementById('clear').addEventListener("click", function(event){; // Checks to see if the clear button has been pressed
    localStorage.setItem("cart", []) // Delete all items in the cart so that there are no items in cart
  })
});