
describe('Order', () => {

    it(`Form should be filled in : ${checkOrder()}`, () => {
        expect(checkOrder()).not.toEqual(''.trim());
    });

});