var sliderPosition = 1;
var link = '';
var imageBlock = document.getElementsByClassName('slider-image')[0];
var radioButtons = document.getElementsByClassName('slider__button');
var forwardButton = document.getElementsByClassName('slider__forward')[0];
var backButton = document.getElementsByClassName('slider__back')[0];

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', function (event) {
        if (!radioButtons[i].classList.contains('slider__button_active')) {
        check(i+1);
        }
    });
}

forwardButton.addEventListener('click', function (event) {
    if (sliderPosition !== radioButtons.length) {
        sliderPosition++;
        check(sliderPosition);
    }

});

backButton.addEventListener('click', function (event) {
    if (sliderPosition !== 1) {
        sliderPosition--;
        check(sliderPosition);
        }
});

function slideAnimation(link) {
    console.log(link);
    setTimeout(function () {
        imageBlock.style.opacity = 0;
    }, 100);
    setTimeout(function () {
        imageBlock.src = 'img/' + link + '.jpg' ;
    }, 1000);

    setTimeout(function () {
        imageBlock.style.opacity = 1;
    }, 1200);
    selectButton(link);
}

function clearButtons() {
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].classList.remove('slider__button_active');
    }
}

function selectButton(position) {
    clearButtons();
    radioButtons[position-1].classList.add('slider__button_active');
}

function check(position) {
    switch(position) {
        case 1:
            backButton.style.opacity = 0.2;
            forwardButton.style.opacity = 0.8;
            sliderPosition = position;
            slideAnimation(position);
            selectButton(position);
            break;
        case 2:
            backButton.style.opacity = 0.8;
            forwardButton.style.opacity = 0.8;
            sliderPosition = position;
            slideAnimation(position);
            selectButton(position);
            break;
        case 3:
            forwardButton.style.opacity = 0.2;
            sliderPosition = position;
            slideAnimation(position);
            selectButton(position);
            break;
    }
}