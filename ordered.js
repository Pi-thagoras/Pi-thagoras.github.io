var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000); // Wait for 3 seconds for the text to pop up
}

function showPage() {
  document.getElementById("loader").style.display = "none"; // Hide the loading symbol
  document.getElementById("loaded").style.display = "block"; // Unhide the text
}


function randnum() {
  document.getElementById("randnum").innerHTML =  // Get the element "randnum"
  Math.floor(Math.random() * 100000) + 1; // And print a random number between 1 and 100000 excluding 100000
}