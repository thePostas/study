var sliderPosition = 0;
var imageBlock = document.getElementsByClassName('slider__inner-slider')[0];
var controls = document.getElementsByClassName('slider__controls')[0];
var buttons = document.getElementsByClassName('slider__button');
var leftButton = document.getElementsByClassName('slider__arrow-button-left')[0];
var rightButton = document.getElementsByClassName('slider__arrow-button-right')[0];

var sliderConstructor = function (imagesCount) {

    imageBlock.style.width = 100 * imagesCount + "%";
    for (var i = 0; i < imagesCount; i++) {
        var newImage = document.createElement('img');
        newImage.classList.add('slider__image');
        newImage.classList.add('slider__image_' + imagesCount);
        newImage.src = 'img/' + (i+1) + '.jpg';
        newImage.style.width = 100 / imagesCount + "%";
        imageBlock.appendChild(newImage);
        var radioButtonsGenerate = document.createElement('span');
        radioButtonsGenerate.classList.add('slider__button');
        radioButtonsGenerate.classList.add('slider__button_' + imagesCount);
        controls.appendChild(radioButtonsGenerate);
    }
}

sliderConstructor(5);

buttons[0].classList.add('slider__button_active');

var buttons = document.getElementsByClassName('slider__button');

for (var i = 0; i < buttons.length; i ++) ((i) => {
    buttons[i].addEventListener('click', sliderAnimation(i));
})(i);

leftButton.addEventListener('click', goLeft);
rightButton.addEventListener('click', goRight);

function sliderAnimation(i) {
    return function () {
            reset();
            applyStyles(i);
            sliderPosition = i;
            imageBlock.style.left = -(i * 100) + '%';
            buttons[i].classList.add('slider__button_active');
    }
}

function goRight() {
    if (sliderPosition < buttons.length -1) {
        sliderPosition++;
        sliderAnimation(sliderPosition)();
        }
}

function goLeft() {
    console.log(sliderPosition);
    if (sliderPosition > 0) {
        sliderPosition--;
        sliderAnimation(sliderPosition)();
    }
}

function applyStyles(i) {
    if (i === 0) {
        leftButton.style.opacity = 0.2;
        leftButton.classList.add('slider__arrow-button-end');}
    else {leftButton.style.opacity = 1;}
    if (i === buttons.length-1) {
        rightButton.style.opacity = 0.2;
        rightButton.classList.add('slider__arrow-button-end');
    }
    else {rightButton.style.opacity = 1;}
}

function reset() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('slider__button_active');
        leftButton.classList.remove('slider__arrow-button-end');
        rightButton.classList.remove('slider__arrow-button-end');
    }
}