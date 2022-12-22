
describe('Custom order', () => {
    
    it("There should be products in the product list", () => {
        addToProducts(database.chocolates[11]);
        addToProducts(database.chocolates[5]);

        expect(checkProducts()).toBe(2);
    })
});
