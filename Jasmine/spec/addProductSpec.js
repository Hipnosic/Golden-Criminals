
describe('Custom order', () => {

    it("There should be 1 product in the product list", () => {
        addToProducts(database.chocolates[11]);

        expect(checkProducts()).toBe(1);
    })
});
