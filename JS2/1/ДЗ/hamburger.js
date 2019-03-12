var Hamburger = function (size, stuffing) {
    Hamburger.SIZE_SMALL = [50, 20];
    Hamburger.SIZE_LARGE = [100, 40];
    Hamburger.STUFFING_CHEESE = [10, 20];
    Hamburger.STUFFING_SALAD = [20, 5];
    Hamburger.STUFFING_POTATO = [15, 10];
    Hamburger.TOPPING_MAYO = [20, 5];
    Hamburger.TOPPING_SPICE = [15, 0];
    Hamburger.TOPPING = [];
    this.ingrids = [];
    if (size === 'LARGE') {
        this.ingrids.push(['LARGE', Hamburger.SIZE_LARGE]);
    } else this.ingrids.push(['SMALL', Hamburger.SIZE_SMALL]);
    if (stuffing === 'cheese') {
        this.ingrids.push(['Cheese', Hamburger.STUFFING_CHEESE]);
    } else if (stuffing === 'salad') {
        this.ingrids.push(['Salad', Hamburger.STUFFING_SALAD]);
    } else this.ingrids.push(['Potato', Hamburger.STUFFING_POTATO]);
};

Hamburger.prototype.addTopping = function (topping) {
    for (let i = 0; i < topping.length; i++) {
        try {
            if (topping[i] === 'spice') {
                this.ingrids.push(['Spice',Hamburger.TOPPING_SPICE]);
            } else if (topping[i] === 'MAYO') {
                this.ingrids.push(['MAYO',Hamburger.TOPPING_MAYO]);
            } else throw new Error('Неверный тип начинки');
        } catch(e) {
            HamburgerException(e);
        }

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
    console.log(topping);
    for (var i = 0; i < this.ingrids.length; i++) {
        if (this.ingrids[i][0] === topping) {
            delete this.ingrids[i];
        }
     }
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
    throw ('error');
};
/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () {
    var price = 0;
    for (var i = 0; i < this.ingrids.length; i++) {
        price += this.ingrids[i][1][0];
    }
    return price;
};
/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () {
    var calories = 0;
    for (var i = 0; i < this.ingrids.length; i++) {
        calories += this.ingrids[i][1][1];
    }
    return calories;
};

Hamburger.prototype.render = function () {
    caloriesOutput.innerHTML = 'Callories: ' + this.calculateCalories();
    priceOutput.innerHTML = 'Price: ' + this.calculatePrice();
};

function HamburgerException (e) {
    console.log(e);
}

var submit = document.getElementsByClassName('hamburger__submit')[0];

sizeButtons = document.getElementsByClassName('hamburger__size-button');
stuffingButtons = document.getElementsByClassName('hamburger__stuffing-select-option');
toppingButtons = document.getElementsByClassName('hamburger__topping-input');
priceOutput = document.getElementsByClassName('hamburger__result-price')[0];
caloriesOutput = document.getElementsByClassName('hamburger__result-calories')[0];

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
        }
    }
    event.preventDefault();
    var newBurger = new Hamburger(size, stuffing);
    console.log(newBurger);
    newBurger.addTopping(topping);
    newBurger.render();
    console.log(newBurger);
});

newBurger2 = new Hamburger('LARGE', 'cheese');
newBurger2.addTopping(['MAYO']);
newBurger2.addTopping(['spice']);
newBurger2.addTopping(['spicee']);
console.log(newBurger2);
// newBurger2.removeTopping('MAYO');
console.log(newBurger2);