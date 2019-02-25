function Element(className, parentClass) {
    this.className = className;
    this.parentClass = parentClass;
}

Element.prototype.render = function (elementType) {
    var newElement = document.createElement(this.elementType);
    newElement.classList.add(this.className);
    if (this.parentClass === 'body') {
        document.body.appendChild(newElement);
    } else {
       document.getElementsByClassName(this.parentClass)[0].appendChild(newElement);
    }
};

Element.prototype.remove = function () {
    console.log(this.classList);

    var node = document.getElementsByClassName(this.className)[0];
    node.parentNode.removeChild(node);
};


var Div = function (className, parentClass) {
    Element.apply(this, arguments);
    this.elementType = 'div';
};

Div.prototype = Object.create(Element.prototype);
Div.constructor = Div;

var List = function (className, parentClass, ...elements) {
    Element.apply(this, arguments);
    this.elementType = 'ul';
    this.elements = elements || [];
};

List.prototype = Object.create(Element.prototype);
List.constructor = List;

List.prototype.render = function () {
    var newElement = document.createElement(this.elementType);
    newElement.classList.add(this.className);
    for (var i = 0; i < this.elements.length; i++) {
        if (this.elements[i] instanceof ListElement) {
            var link = document.createElement('a');
            link.classList.add(this.className.toString() + '-link')
            link.href = this.elements[i].link;
            var item = document.createElement('li');
            item.classList.add(this.className.toString() + '-item');
            item.classList.add(this.className.toString() + '-item-' + (i+1));
            link.innerHTML = this.elements[i].content;
            item.appendChild(link);
            newElement.appendChild(item);
        } else {
            console.log('incorrect type of list element');
        }
    }
    document.getElementsByClassName(this.parentClass)[0].appendChild(newElement);
};

var ListElement = function (link, content) {
    this.elementType = 'li';
    this.link = link;
    this.content = content;
};

ListElement.prototype.render = function() {
  
};


ListElement.prototype = Object.create(Element.prototype);
ListElement.constructor = ListElement;


var navigation = new Div('navigation', 'body');
navigation.render();

var navigationListItem1 = new ListElement('#', 'Home');
var navigationListItem2 = new ListElement('#', 'Catalog');
var navigationListItem3 = new ListElement('#', 'News');
var navigationListItem4 = new ListElement('#', 'Contact us');
var navigationListItem5 = new ListElement('#', 'About us');

var navigationSubMenuItem1 = new ListElement('#', 'Sub1');
var navigationSubMenuItem2 = new ListElement('#', 'Sub2');

var navigationList = new List('navigation__list', 'navigation', navigationListItem1, navigationListItem2, navigationListItem3, navigationListItem4, navigationListItem5);
var subMenu = new List('navigation__list-sub-menu', 'navigation__list-item-3', navigationSubMenuItem1, navigationSubMenuItem2);

navigationList.render();
subMenu.render();