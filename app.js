const productContainer = document.querySelector('.products');
const db = database;
let i = 0;
for (const button of addProductBtn) {
    button.addEventListener('click', () => {
        alert('"Product name" added to cart');
    });
}
// FLYTTA ALLA PRODUKT SCRIPTS TILL EGEN FIL
function products() {
  if (window.location.pathname == '/products.html') {
    for (const drink of db.drinks) {
        const productDiv = document.createElement('article');
        const img = document.createElement('img');
        const header = document.createElement('h2');
        const span = document.createElement('span');
        const text = document.createElement('p');
        const button = document.createElement('button');
        productDiv.classList.add('product');
        img.classList.add('product-img');
        header.classList.add('product-name');
        span.classList.add('product-info');
        text.classList.add('product-price');
        button.classList.add('add-product');

        img.setAttribute('src', `${drink.img}`);
        header.innerText = `${drink.name}`;
        span.innerText = `${drink.dsc}`;
        text.innerText = `${drink.price} kr`;
        button.innerText = '+';
        productDiv.append(img, header, span, text, button);
        productContainer.append(productDiv);
    }
  }
}

function addListener() {
    const products = document.querySelectorAll('.product');
    const addProductBtn = document.querySelectorAll('.add-product');
    for (const button of addProductBtn) {
        button.addEventListener('click', () => {
            alert('"Product name" added to cart');
        });
    }
    for (const prduct of products) {
        let clicked = false;
        prduct.addEventListener('click', (e) => {
            let targetParent = e.target.parentNode;
            let span = targetParent.querySelector('.product-info');
            let image = targetParent.querySelector('.product-img');
            if (e.target.nodeName != 'BUTTON') {
                if (clicked == false) {
                    clicked = true;
                    span.setAttribute('style', 'display: block;');
                    image.setAttribute('style', 'filter: blur(20px);');
                } else if (clicked == true) {
                    clicked = false;
                    span.setAttribute('style', 'display: none;');
                    image.setAttribute('style', 'filter: blur(0px);');
                }
            }
        });
        
function searchFunction() {
  const products = document.querySelectorAll('.product');
  input = document.getElementById('searchbar').value
  let productPos = 0;
  for (const drink of db.drinks) {
    if (drink.dsc.toUpperCase().includes(input.toUpperCase()) || drink.name.toUpperCase().includes(input.toUpperCase())){
      /*
      for testing
      console.log(productPos)
      console.log(drink.dsc.toUpperCase());
      console.log(input.toUpperCase());
      console.log(!drink.dsc.toUpperCase().includes(input.toUpperCase()));
      console.log(drink.name.toUpperCase());
      console.log(input.toUpperCase());
      console.log(!drink.name.toUpperCase().includes(input.toUpperCase()));
      */
      products[productPos].style.display = '';

    }
    else{
      products[productPos].style.display = 'none';
    }
    productPos++;
  }
  CheckAndCreateIfNoItem(productPos);
}

function CheckAndCreateIfNoItem(productPos){
  let mainContainer = document.querySelector('.noItems');
  const products = document.querySelectorAll('.product');
  for (let i = 0; i < productPos; i++) {
    if (products[i].style.display == '') {
      mainContainer.style.display = 'none';
      return;
    }
  }
  mainContainer.style.display = '';
}

function createHeader() {
    let headerContainer = document.querySelector('.header-container');
    headerContainer.innerHTML = `
  <h1 class="header-text">The Kraken Inn</h1>
  <a href="#">
    <button type="button" class="languageBtn">ENG</button>
  </a>
  <button class="helpBtn"><img src="/icons/assistance.png" alt="Help" height="30" width="30"></button>
  <div class="logo"></div>`;
}
function createFooter() {
    let FooterContainer = document.querySelector('.footer-container');
    FooterContainer.innerHTML = `
  <nav class="nav-container">
    <a class="container-buttons" href="index.html">
      <button type="button" class="buttons">
        <img class="icon" src="/icons/home.png" alt="Home icon" />
      </button>
    </a>
    <a class="container-buttons" href="products.html">
      <button type="button" class="buttons">
        <img class="icon" src="/icons/food.png" alt="Home icon" />
      </button>
    </a>
    <a class="container-buttons" href="order.html">
      <button type="button" class="buttons">
        <img class="icon" src="/icons/cart.png" alt="Home icon" />
      </button>
    </a>
    <a class="container-buttons" href="checkout.html">
      <button type="button" class="buttons">
        <img class="icon" src="/icons/pay.png" alt="Home icon" />
      </button>
    </a>
  </nav>`;
}

products();
addListener();
createHeader();
createFooter();