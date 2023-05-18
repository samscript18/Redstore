let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
  
  
const cartContainer = document.getElementById("cart-container");

//Dipslay total;
function displayTotal() {
  cart.forEach(() => {
    const totalMoney = cart.reduce((acc, curr) => {
      acc += curr.finalPrice;
      return acc;
    }, 0);

    const finalMoney = parseFloat(totalMoney);
    const subTotal = document.querySelector(".subtotal");
    subTotal.textContent = `$${parseFloat(finalMoney).toFixed(2)}`;
    const Tax = document.querySelector(".tax");
    Tax.textContent = `$${parseFloat(0.02 * finalMoney).toFixed(2)}`;
    const allTotal = document.querySelector(".all-total");
    allTotal.textContent = `$${parseFloat(
      finalMoney + JSON.parse(0.02 * finalMoney)
    ).toFixed(2)}`;
    document.querySelector(".cart-count").textContent = cart.length;
  });
}

// Get items from cart array and display them in cart
function displayCartItems(cart){
  cart.forEach((item) => {
    const cartItem = document.createElement("tr");
    cartItem.innerHTML = `<td>
              <div class="cart-info">
                  <img src="${item.img}">
                  <div>
                    <h3 class="cart-h3">${item.name}</h3>
                    <p>Price : $${item.price}</p>
                    <a href="#" class="remove-btn" data-id="${item.id}" onclick="removeItem(event)">Remove</a>
                  </div>
                </div>
          </td>
          <td>
            <input type="number" value="${item.value}" readonly>
          </td>
          <td class="cart-price">$${item.finalPrice}</td>`;
    cartContainer.appendChild(cartItem);
    displayTotal();
  })
};


window.addEventListener("DOMContentLoaded", () => {
  displayCartItems(cart);
});