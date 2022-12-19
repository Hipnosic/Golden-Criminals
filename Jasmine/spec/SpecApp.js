
describe('Order', () => {

    it(`Form should be filled in`, () => {

        expect(checkOrder(input)).not.toEqual(''.trim());
    });

    describe('Ready to order', () => {

        it('Custom order is ready', () => {
            expect(clickButton()).toBeTruthy();
        })
    })
});