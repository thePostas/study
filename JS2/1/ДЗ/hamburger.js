var Hamburger = function (size, stuffing) {
    Hamburger.SIZE_SMALL = [50, 20];
    Hamburger.SIZE_LARGE = [100, 40];
    Hamburger.STUFFING_CHEESE = [10, 20];
    Hamburger.STUFFING_SALAD = [20, 5];
    Hamburger.STUFFING_POTATO = [15, 10];
    Hamburger.TOPPING_MAYO = [20, 5];
    Hamburger.TOPPING_SPICE = [15, 0];
};

Hamburger.prototype.addTopping = function (topping) {
    this.topping = topping;
};

var submit = document.getElementsByClassName('hamburger__submit')[0];

sizeButtons = document.getElementsByClassName('hamburger__size-button');
stuffingButtons = document.getElementsByClassName('hamburger__stuffing-select-option');
toppingButtons = document.getElementsByClassName('hamburger__topping-input');

submit.addEventListener('click', function (event) {
    var size;
    var stuffing;
    var topping = [];
    for (let i = 0; i < sizeButtons.length; i++) {
        if (sizeButtons[i].checked) {
            size = sizeButtons[i].value;
            console.log(size);
        }
    }
    for (let i = 0; i < stuffingButtons.length; i++) {
        if (stuffingButtons[i].selected) {
            stuffing = stuffingButtons[i].value;
            console.log(stuffing);
        }
    }
    for (let i = 0; i < toppingButtons.length; i++) {
        if (toppingButtons[i].checked) {
            topping.push(toppingButtons[i].value);
            console.log(topping);
        }
    }
    event.preventDefault();
    var newBurger = new Hamburger(size, stuffing);
    newBurger.addTopping(topping);
});