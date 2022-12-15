const addProductBtn = document.querySelectorAll('.add-product');

for (const button of addProductBtn) {
  button.addEventListener('click', () => {
    alert('"Product name" added to cart');
  });
}
