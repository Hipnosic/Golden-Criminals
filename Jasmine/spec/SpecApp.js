
describe('Custom order', () => {

    it(`Form should not be empty`, () => {

        expect(checkOrder(input).trim()).not.toEqual('');
    });
});

describe('Ready to order', () => {

    it('Custom order is ready', () => {
        expect(clickButton()).toBeTruthy();
    });
});