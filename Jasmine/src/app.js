let input = 'A very good drink that not very good for you!'
let clickable = false;
function checkOrder(order) {
    order = input.trim();
    return order;
}

function clickButton() {
    if (input.trim() == '') {
        return clickable;
    } else {
        return clickable = true;
    }
}