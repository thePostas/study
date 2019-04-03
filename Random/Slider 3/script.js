(function slider() {
    let imageBlock = document.getElementsByClassName('slider-image')[0];
    let spanParent = document.getElementsByClassName('slider__controls')[0];
    let forwardButton = document.getElementsByClassName('slider__forward')[0];
    let backButton = document.getElementsByClassName('slider__back')[0];
    let currentPosition = 0;
    let latency = 1000;
    let throttled = false;
    let xhr = new XMLHttpRequest();
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
                let images = JSON.parse(xhr.responseText);
                for (let i = 0; i < images.length; i++) {
                    let span = document.createElement('span');
                    span.classList.add('slider__button');
                    spanParent.appendChild(span);
                    if (i === 0) {
                        span.classList.add('slider__button_active');
                        imageBlock.src = images[0].url;
                    }
                }
                let radioButtons = document.getElementsByClassName('slider__button');
                for (let i = 0; i < radioButtons.length; i++) {
                    radioButtons[i].addEventListener('click', function () {
                        console.log(currentPosition);
                        if (i !== currentPosition && !throttled) {
                            currentPosition = i;
                            throttle(slide, latency);
                        }
                    });
                }
                forwardButton.addEventListener('click', function () {
                    if (currentPosition !== radioButtons.length-1) {
                        if (!throttled) {
                            currentPosition++;
                            throttle(slide, latency);
                        }
                    }
                });

                backButton.addEventListener('click', function () {
                    if (!throttled) {
                        currentPosition--;
                        throttle(slide, latency);
                    }
                });
                function slide() {
                    imageBlock.classList.add('disappear');
                    for (let i = 0; i < radioButtons.length; i++) {
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
                    setTimeout(function () {
                        imageBlock.src = images[currentPosition].url;
                        imageBlock.classList.remove('disappear');
                    },latency/2)
                }

                function throttle(func, ms) {
                    if (!throttled) {
                        func();
                        throttled = true;
                        setTimeout(function () {
                            throttled = false
                        }, ms);
                    }
                }
            }
        }
    };
})();