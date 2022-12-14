const productContainer = document.querySelector('.products');
let numContainer = document.getElementById("num");
let value = 0;
let btnInc = document.querySelector(".inc");
let btnDec = document.querySelector(".dec");
let btnReset = document.querySelector(".reset");

function addProducts() {
    if (window.location.pathname == '/products.html') {
        for (const product of pickedProducts) {
            const productArticle = document.createElement('article');
            const img = document.createElement('img');
            const header = document.createElement('h2');
            const span = document.createElement('span');
            const text = document.createElement('p');
            const button = document.createElement('button');
            productArticle.classList.add('product');
            img.classList.add('product-img');
            header.classList.add('product-name');
            span.classList.add('product-info');
            text.classList.add('product-price');
            button.classList.add('add-product');
            img.setAttribute('src', `${product.img}`);
            img.setAttribute('alt', `${product.name}`);
            header.innerText = `${product.name}`;
            span.innerText = `${product.dsc}`;
            text.innerText = `${product.price} Coins`;
            button.innerText = '+';
            button.addEventListener('click', () => {
                if (confirm(`Your current balance is 350 Coins, this product costs ${text.innerText.split(' ')[0]} Coins, Are you sure you want to place this order? `)) {
                    alert('Your order has been placed')
                }
            });
            productArticle.append(img, header, span, text, button);
            productContainer.append(productArticle);
        }
    }
}


function showProductDsc() {
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

function customizeDrink() {
    if (window.location.pathname == '/products.html') {
        const products = document.querySelectorAll('.product');
        const filters = document.querySelector('.filters');
        const search = document.querySelector('.search-container');
        const customOrderButton = document.querySelector('.custom-order');
        customOrderButton.addEventListener('click', () => {
            for (const product of products) {
                product.remove();
            }
            filters.remove();
            search.remove();
            let customOrderForm = document.createElement('form');
            let input = document.createElement('input');
            let button = document.createElement('button');
            customOrderForm.classList.add('custom-order-form');
            input.classList.add('custom-order-input');
            button.classList.add('custom-order-button');
            button.innerText = 'Order';
            button.addEventListener('click', () => {
                let input = document.querySelector('.custom-order-input');
                if (input.value.trim() != '') {
                    console.log(input.value)
                }
            });
            customOrderForm.append(input, button);
            productContainer.append(customOrderForm);
        });
    }
}


function searchFunction() {
    const products = document.querySelectorAll('.product');
    // gets the input
    input = document.getElementById('searchbar').value;
    let productPos = 0;
    for (const product of pickedProducts) {
        //toUpperCase for non caps specific
        //if the product description includes input or if the product name includes input
        if (
            product.dsc.toUpperCase().includes(input.toUpperCase()) ||
            product.name.toUpperCase().includes(input.toUpperCase())
        ) {
            products[productPos].style.display = '';
        } else {
            products[productPos].style.display = 'none';
        }
        //makes sure that the right product gets changed
        productPos++;
    }
    CheckAndCreateIfNoItem(productPos);
}

function CheckAndCreateIfNoItem(productPos) {
    //checks if there is no product left and creates text if none are left
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

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}

function createHeader() {
    //makes the html for header
    let headerContainer = document.querySelector('.header-container');
    headerContainer.innerHTML = `
    <a href="index.html" class="img-container">
        <img
        class="page-logotype"
        src="/images/kraken-text-logo.svg"
        alt="The Kraken Inn logotype"
        />
    </a>
    <div id="google_translate_element"></div>
    <a href="login.html">
    <button class="loginBtn">
      <img src="/icons/pirate.svg" alt="Login" height="30" width="30" />
    </button>
    </a>`;
}

function createFooter() {
    //makes the html for footer
    let FooterContainer = document.querySelector('.footer-container');
    FooterContainer.innerHTML = `
    <nav class="nav-container">
      <a class="container-buttons" href="index.html">
        <button type="button" class="buttons">
          <img class="icon" src="icons/pirate-skull-light.svg" alt="Home icon" />
        </button>
      </a>
      <a class="container-buttons" href="products.html">
        <button type="button" class="buttons">
          <img class="icon" src="icons/saber-light.svg" alt="Home icon" />
        </button>
      </a>
      <a class="container-buttons" href="checkout.html">
        <button type="button" class="buttons">
          <img class="icon" src="icons/chest-light.svg" alt="Home icon" />
        </button>
      </a>
    </nav>`;
}

addToProducts(database.chocolates[11]);
addToProducts(database.bbqs[11]);
addToProducts(database.burgers[12]);
addToProducts(database.desserts[11]);
addToProducts(database.pizzas[11]);
addProducts();
showProductDsc();
customizeDrink();
createHeader();
createFooter();