const productContainer = document.querySelector('.products');
const db = [database.bbqs, database["best-foods"], database.breads, database.burgers, database.chocolates, database.desserts, database.drinks, database["fried-chicken"], database["ice-cream"], database["our-foods"], database.pizzas, database.porks, database.sandwiches, database.sausages, database.steaks];
const pickedProducts = [database.bbqs[15], database["best-foods"][3], database.burgers[22], database.burgers[43]]
// FLYTTA ALLA PRODUKT SCRIPTS TILL EGEN FIL
function products() {
    if (window.location.pathname == '/products.html') {
        //for (const category of db) {
        for (const product of pickedProducts) {
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
            button.addEventListener('click', () => {
                alert('"Product name" added to cart');
            });
            img.setAttribute('src', `${product.img}`);
            img.setAttribute('alt', `${product.name}`);
            header.innerText = `${product.name}`;
            span.innerText = `${product.dsc}`;
            text.innerText = `${product.price} kr`;
            button.innerText = '+';
            productDiv.append(img, header, span, text, button);
            productContainer.append(productDiv);
        }

        //}
    }
}
console.log(database)
function addListener() {
    const products = document.querySelectorAll('.product');

    for (const product of products) {
        let clicked = false;
        product.addEventListener('click', (e) => {
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
    }
}


function searchFunction() {
    const products = document.querySelectorAll('.product');
    input = document.getElementById('searchbar').value
    let productPos = 0;
    for (const product of pickedProducts) {
        if (product.dsc.toUpperCase().includes(input.toUpperCase()) || product.name.toUpperCase().includes(input.toUpperCase())) {
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
        else {
            products[productPos].style.display = 'none';
        }
        productPos++;
    }
    CheckAndCreateIfNoItem(productPos);
}

function CheckAndCreateIfNoItem(productPos) {
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
    <header class="header-container">
    <img
      class="page-logotype"
      src="/images/kraken-text-logo.svg"
      alt="The Kraken Inn logotype"
    />
    <a href="#">
      <button type="button" class="languageBtn">ENG</button>
    </a>
    <button class="helpBtn">
      <img src="/icons/question.png" alt="Help" height="30" width="30" />
    </button>
  </header>`;
}
function createFooter() {
    let FooterContainer = document.querySelector('.footer-container');
    FooterContainer.innerHTML = `
    <footer class="footer-container">
    <nav class="nav-container">
      <a class="container-buttons" href="index.html">
        <button type="button" class="buttons">
          <img class="icon" src="icons/pirate-skull.png" alt="Home icon" />
        </button>
      </a>
      <a class="container-buttons" href="products.html">
        <button type="button" class="buttons">
          <img class="icon" src="icons/saber.png" alt="Home icon" />
        </button>
      </a>
      <a class="container-buttons" href="order.html">
        <button type="button" class="buttons">
          <img class="icon" src="icons/chest.png" alt="Home icon" />
        </button>
      </a>
      <a class="container-buttons" href="checkout.html">
        <button type="button" class="buttons">
          <img class="icon" src="icons/right.png" alt="Home icon" />
        </button>
      </a>
    </nav>
  </footer>`;
}

products();
addListener();
createHeader();
createFooter();