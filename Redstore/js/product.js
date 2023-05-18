
function addCartToLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function getCartFromLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}

let cart = getCartFromLocalStorage();



//Generate cart items and send to local storage
const cartBtn = document.querySelectorAll(".cart-btn");
cartBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let fullPath =
      e.target.parentElement.parentElement.children[0].children[0].src;
    let Position = fullPath.indexOf("img") + 4;
    let parPath = fullPath.slice(Position);

    const item = {};
    item.img = `../products-img/${parPath}`;

    let name = e.target.parentElement.children[1].textContent;
    item.name = name;

    let Value = e.target.parentElement.children[4].value;
    item.value = Value;

    let Id = e.target.parentElement.children[5].dataset.id;
    item.id = Id;

    let price = e.target.parentElement.children[2].textContent;
    let initialPrice = price.slice(1).trim();
    item.price = parseFloat(initialPrice);

    let newPrice = parseFloat(item.price) * parseInt(item.value);
    item.finalPrice = parseFloat(newPrice);

    cart.push(item);
    addCartToLocalStorage(cart);
    btn.Disabled = true;
    alert("Item Has Been Added To Cart");
  });
});


function Button(){
  const btn = document.querySelector('.cart-btn');
  const id = btn.dataset.id;
  // check if the button is in the cart
  const inCart = cart.find( (item) =>
    item.id == id
  );
  if(inCart){
    btn.disabled = true;
    btn.textContent = 'In Cart';
    btn.classList.add('btn-disabled');
  } else {
    btn.addEventListener('click', (e) => {
      btn.disabled = true;
      btn.textContent = 'In Cart';
      btn.classList.add('btn-disabled');
      document.querySelector(".cart-count").textContent = cart.length;
    })
  }
}



var ProductImg = document.getElementById("ProductImg");
var GalleryImg = document.getElementsByClassName("Gallery-img");

GalleryImg[0].onclick = function () {
  ProductImg.src = GalleryImg[0].src;
};
GalleryImg[1].onclick = function () {
  ProductImg.src = GalleryImg[1].src;
};
GalleryImg[2].onclick = function () {
  ProductImg.src = GalleryImg[2].src;
};
GalleryImg[3].onclick = function () {
  ProductImg.src = GalleryImg[3].src;
};



window.addEventListener('DOMContentLoaded', () => {
  Button();
})