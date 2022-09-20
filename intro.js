// Lines 1 - 22 are not used as they are part chem.html which isn't used

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it







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

// Get cart from local storage
let cart = localStorage.getItem("cart") // 'cart' is the localstorage cart
if (cart === null){ // If there isn't any items in the cart
  localStorage.setItem("cart","") // Add cart to the front of cart
  cart = []
}else{
  cart = cart.split(",").filter(element => element); // Filters out any elements that have nothing in them
  if (cart === []){
    cart = []
  }
}


function hideNotify() {
var x = document.getElementById("notify"); // Variable x is the element with the id "notify"
  if (cart.length > 0) { // If the cart length is longer than 0
    x.style.visibility = "visible"; //Make the red circle and text visible
    cart_number = x // Change text to the cart length
    cart_number.innerHTML = cart.length // Text that is visble on html will change to the cart length
  } 
  else {
    x.style.visibility = "hidden"; // If there are no items in the cart, don't show the red circle and text
  }
}


document.addEventListener("DOMContentLoaded", function(event) { // Wait for the page to load before running variables

hideNotify() // Run the function hideNotify()

window.onscroll = function (e) {  // When the user scrolls the page, execute myFunction
  myFunction()
  // called when the window is scrolled.  
  } 

  console.log("cart:", cart)
// Get the header
document.getElementById('Bocco_Button').addEventListener("click", function(event){; // If someone clicks the button
  cart.push(" Fried Boccocini Platter") // Prints this in the html for the user to see, number and 'x' is printed separately
  localStorage.setItem("cart",cart.join(',')) // Join it properly in the cart
  hideNotify() //Hide the notification
})
document.getElementById('Skew_Button').addEventListener("click", function(event){;
  cart.push(" Chicken Skewers")
  localStorage.setItem("cart",cart.join(','))
  hideNotify()
})
document.getElementById('Dump_Button').addEventListener("click", function(event){;
  cart.push(" Chicken and Spinach Dumplings")
  localStorage.setItem("cart",cart.join(','))
  hideNotify()
})
document.getElementById('Chic_Button').addEventListener("click", function(event){;
  cart.push(" Whole Roast Chicken")
  localStorage.setItem("cart",cart.join(','))
  hideNotify()
})
document.getElementById('Fish_Button').addEventListener("click", function(event){;
  cart.push(" Panko Crusted Fish Fillet")
  localStorage.setItem("cart",cart.join(','))
  hideNotify()
})
document.getElementById('Steak_Button').addEventListener("click", function(event){;
  cart.push(" Rare Beef Steak")
  localStorage.setItem("cart",cart.join(','))
  hideNotify()
})
document.getElementById('Salad1_Button').addEventListener("click", function(event){;
  cart.push(" Prosciutto and BBQ Peach Salad")
  localStorage.setItem("cart",cart.join(','))
  hideNotify()
})
document.getElementById('Salad2_Button').addEventListener("click", function(event){;
  cart.push(" Loaded Pasta Salad")
  localStorage.setItem("cart",cart.join(','))
  hideNotify()
})
document.getElementById('Salad3_Button').addEventListener("click", function(event){;
  cart.push(" Green Goodness Salad")
  localStorage.setItem("cart",cart.join(','))
  hideNotify()
})
document.getElementById('Tart_Button').addEventListener("click", function(event){;
  cart.push(" Lemon Meringue Tart")
  localStorage.setItem("cart",cart.join(','))
  hideNotify()
})
document.getElementById('Donut_Button').addEventListener("click", function(event){;
  cart.push(" Custard filled Donuts")
  localStorage.setItem("cart",cart.join(','))
  hideNotify()
})
document.getElementById('Churros_Button').addEventListener("click", function(event){;
  cart.push(" Churros and Ice Cream")
  localStorage.setItem("cart",cart.join(','))
  hideNotify()
})

});




