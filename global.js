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



document.addEventListener("DOMContentLoaded", function(event) { 
  //document.getElementById("defaultOpen").click();

  // When the user scrolls the page, execute myFunction

  window.onscroll = function (e) {  
    myFunction()
    // called when the window is scrolled.  
    } 
  

});


