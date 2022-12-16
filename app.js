const addProductBtn = document.querySelectorAll('.add-product');
const products = document.querySelectorAll('.product');

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
}

function createHeader(){
  let headerContainer = document.querySelector('.header-container'); 
  headerContainer.innerHTML = `
  <h1 class="header-text">The Kraken Inn</h1>
  <a href="#">
    <button type="button" class="languageBtn">ENG</button>
  </a>
  <button class="helpBtn"><img src="/icons/assistance.png" alt="Help" height="30" width="30"></button>
  <div class="logo"></div>`;
}
function createFooter(){
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
createHeader();
createFooter();