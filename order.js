


document.addEventListener("DOMContentLoaded", function(event) {  // This is to see if the page has loaded, once the page has loaded the items inside will run
    // dic = localStorage.getItem("finalcart1");
    // dic = JSON.parse(dic)
    // cart1 = dic.carty
    // for (let d = 0; d < cart1.length; d++){
    //     document.getElementById("finalCart").innerHTML = cart1[d]
    // }
    if (localStorage.getItem("cart").length > 0) { // If there are items in the cart, run all this
    let finalcart = localStorage.getItem("finalcart1").split(",")
    let finalCartNode = document.getElementById("finalCart")
    finalcart.forEach(element => {
      let node = document.createElement("tr")
      node.innerHTML = element
      finalCartNode.appendChild(node) // Print each item and its corresponding amount
    });
    document.getElementById("finalPrice").innerHTML = '$' + localStorage.getItem("totalItemCost"); // Print the total cost
  }
    else { // Else if there are no items in the cart, run these
      document.getElementById("finalCart").innerHTML = "No Items";
      document.getElementById("finalPrice").innerHTML = "$0.00";
    }

    document.getElementById('button100').addEventListener("click", function(event){; // Checks to see if the clear button has been pressed
    localStorage.setItem("cart", []) // Delete all items in the cart so that there are no items in cart
  })
});