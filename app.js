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
