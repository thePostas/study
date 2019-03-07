function Element(elementClassName, parentClass) {
    this.elementClassName = elementClassName;
    this.parentClass = parentClass;
}

Element.prototype.render = function (elementType) {
    var newElement = document.createElement(this.elementType);
    for (let i = 0; i < this.elementClassName.length; i++) {
        newElement.classList.add(this.elementClassName[i]);
    }
     if (this.parentClass === 'body') {
        document.body.appendChild(newElement);
    } else {
       document.getElementsByClassName(this.parentClass)[0].appendChild(newElement);
    }
};

Element.prototype.remove = function () {
    var node = document.getElementsByClassName(this.elementClassName)[0];
    console.log(this.elementClassName);
    node.parentNode.removeChild(node);
};


var Div = function (elementClassName, parentClass) {
    Element.apply(this, arguments);
    this.elementType = 'div';
};

Div.prototype = Object.create(Element.prototype);
Div.constructor = Div;

var List = function (elementClassName, parentClass, ...elements) {
    Element.apply(this, arguments);
    this.elementType = 'ul';
    this.elements = elements || [];
};

List.prototype = Object.create(Element.prototype);
List.constructor = List;

List.prototype.render = function () {
    var newElement = document.createElement(this.elementType);
    for (let i = 0; i < this.elementClassName.length; i++) {
        newElement.classList.add(this.elementClassName[i]);
    }
    for (var i = 0; i < this.elements.length; i++) {
        if (this.elements[i] instanceof ListElement) {
            var link = document.createElement('a');
            link.classList.add(this.elementClassName[0].toString() + '-link');
            if (this.elements[i].active === true) link.classList.add(this.elementClassName[0].toString() + '-link-active');
            link.href = this.elements[i].linkAddress;
            var item = document.createElement('li');
            // item.classList.add(this.elementClassName.toString() + '-item');
            item.classList.add(this.elementClassName[0].toString() + '-item-' + (i+1));
            link.innerHTML = this.elements[i].content;
            this.elements[i].elementClassName = this.elementClassName[0].toString() + '-item-' + (i+1);
            item.appendChild(link);
            newElement.appendChild(item);
        } else {
            console.log('incorrect type of list element');
        }
    }
    document.getElementsByClassName(this.parentClass)[0].appendChild(newElement);
};

var ListElement = function (linkAddress, content, active) {
    this.elementType = 'li';
    this.linkAddress = linkAddress;
    this.content = content;
    this.active = active;
};

ListElement.prototype = Object.create(Element.prototype);
ListElement.constructor = ListElement;

ListElement.prototype.remove = function () {
    var node = document.getElementsByClassName(this.elementClassName)[0];
    console.log(node);
    node.parentNode.removeChild(node);
};

var navigation = new Div(['navigation'], 'body');
navigation.render();

var navigationListItem1 = new ListElement('#', 'Home', true);
var navigationListItem2 = new ListElement('#', 'Catalog');
var navigationListItem3 = new ListElement('#', 'News');
var navigationListItem4 = new ListElement('#', 'Contact us');
var navigationListItem5 = new ListElement('#', 'About us');

var navigationSubMenuItem1 = new ListElement('#', 'Sub1');
var navigationSubMenuItem2 = new ListElement('#', 'Sub2');

var navigationList = new List(['navigation__list'], 'navigation', navigationListItem1, navigationListItem2, navigationListItem3, navigationListItem4, navigationListItem5);
var subMenu = new List(['navigation__list-sub-menu'], 'navigation__list-item-3', navigationSubMenuItem1, navigationSubMenuItem2);

navigationList.render();
subMenu.render();
console.log(navigationListItem3.elementClassName);

// subMenu.remove();
// navigationListItem3.remove();