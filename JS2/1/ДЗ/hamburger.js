var Hamburger = function (size, stuffing) {
    Hamburger.SIZE_SMALL = [50, 20];
    Hamburger.SIZE_LARGE = [100, 40];
    Hamburger.STUFFING_CHEESE = [10, 20];
    Hamburger.STUFFING_SALAD = [20, 5];
    Hamburger.STUFFING_POTATO = [15, 10];
    Hamburger.TOPPING_MAYO = [20, 5];
    Hamburger.TOPPING_SPICE = [15, 0];
    Hamburger.TOPPING = [];
    this.ingridients = [];
    this.stuffing = stuffing;
    // if (size === 'LARGE') {
    //     // this.array = Hamburger.SIZE_LARGE;
    //     this.array.push(Hamburger.SIZE_LARGE);
    // } else this.array.push(Hamburger.SIZE_SMALL);
    // if (this.stuffing === 'cheese') {
    //     this.array.push(Hamburger.STUFFING_CHEESE);
    // } else if (this.stuffing === 'salad') {
    //     this.array.push(Hamburger.STUFFING_SALAD);
    // } else this.array.push(Hamburger.STUFFING_POTATO);
    if (size === 'LARGE') {
        this.ingridients.push(['LARGE', Hamburger.SIZE_LARGE]);
    } else this.ingridients.push(['LARGE', Hamburger.SIZE_SMALL]);
};

Hamburger.prototype.addTopping = function (topping) {
    for (let i = 0; i < topping.length; i++) {
        if (topping === 'spice') {
            this.ingridients.push(['Spice',Hamburger.TOPPING_SPICE]);
        } else this.ingridients.push(['MAYO',Hamburger.TOPPING_MAYO]);
    }
};

/**
 * Убрать добавку, при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function (topping) {

};
/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function () {
    return this.topping;
};
/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () {

};
/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () {

};
/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () {

};
/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () {

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
    console.log(newBurger);
    newBurger.calculateCalories();
    newBurger.calculatePrice();
});