const db = [database.bbqs, database['best-foods'], database.breads, database.burgers, database.chocolates, database.desserts, database.drinks, database['fried-chicken'], database['ice-cream'], database['our-foods'], database.pizzas, database.porks, database.sandwiches, database.sausages, database.steaks];
const pickedProducts = [];
function checkProducts() {
    return pickedProducts.length;
}

function addToProducts(product) {
    pickedProducts.push(product)
    return pickedProducts;
}