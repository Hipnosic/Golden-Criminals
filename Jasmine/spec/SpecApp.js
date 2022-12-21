
describe('Custom order', () => {

    it("product list length should be 5", () => {
        addToProducts(database.chocolates[11]);
        addToProducts(database.bbqs[11]);
        addToProducts(database.burgers[11]);
        addToProducts(database.desserts[11]);
        addToProducts(database.pizzas[11]);

        expect(checkProducts()).toBe(5);
    })
});
