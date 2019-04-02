(function slider() {
    var imageBlock = document.getElementsByClassName('slider-image')[0];
    var spanParent = document.getElementsByClassName('slider__controls')[0];
    var forwardButton = document.getElementsByClassName('slider__forward')[0];
    var backButton = document.getElementsByClassName('slider__back')[0];
    var currentPosition = 0;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'images.json', true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED){
            console.log('Экран ожидания');
        }
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status !== 200) {
                console.log('Error', xhr.status, xhr.statusText);
            } else {
                var images = JSON.parse(xhr.responseText);
                for (let i = 0; i < images.length; i++) {
                    var span = document.createElement('span');
                    span.classList.add('slider__button');
                    spanParent.appendChild(span);
                    if (i === 0) {
                        span.classList.add('slider__button_active');
                        imageBlock.src = images[0].url;
                    }
                }
                var radioButtons = document.getElementsByClassName('slider__button');
                for (let i = 0; i < radioButtons.length; i++) {
                    radioButtons[i].addEventListener('click', function (callback) {
                        currentPosition = i;
                        slide();
                    });
                }
                forwardButton.addEventListener('click', function () {
                    if (currentPosition !== radioButtons.length-1) {
                        currentPosition++;
                        slide();
                    }
                });

                backButton.addEventListener('click', function () {
                    if (currentPosition !== 0) {
                        currentPosition--;
                        slide()
                    }
                });
                function slide() {
                    imageBlock.classList.add('disappear');
                    setTimeout(function () {
                        imageBlock.src = images[currentPosition].url;
                        imageBlock.classList.remove('disappear');
                    }, 500);
                    for (var i = 0; i < radioButtons.length; i++) {
                        radioButtons[i].classList.remove('slider__button_active');
                        }
                        radioButtons[currentPosition].classList.add('slider__button_active');
                    if (currentPosition === 0) {
                        backButton.classList.remove('slider__arrow_active');
                        } else if (currentPosition === radioButtons.length - 1) {
                        forwardButton.classList.remove('slider__arrow_active');
                        } else if (currentPosition !== 0 && currentPosition !== radioButtons.length - 1) {
                        backButton.classList.add('slider__arrow_active');forwardButton.classList.add('slider__arrow_active');
                        }
                }
            }
        }
    };
})();


function first(callback) {
    setTimeout(function() {console.log('first'), 100});
    callback();
}

function second(a, b) {
    console.log(a*b);
}

first(function () {
    second(5, 5)
});