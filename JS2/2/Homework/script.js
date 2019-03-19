var xhr = new XMLHttpRequest();
xhr.open('GET', 'images.json', true);
xhr.send();
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if(xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED){
        console.log('Экран ожидания');
    }
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if(xhr.status !== 200) {
            console.log('Error', xhr.status, xhr.statusText);
        } else {
            var json = xhr.responseText;
            // console.log(json);
            var images = JSON.parse(json);
            console.log(images);
            var picturesBlock = document.getElementsByClassName("pictures__image");
            function clear() {
                for (var i = 0; i < images.length; i++) {
                    console.log('333');
                    picturesBlock[i].src = images[i].small;
                }
            }
            clear();
            for (var i = 0; i < images.length; i++) ((i) => {
                picturesBlock[i].addEventListener('click', function () {
                    clear();
                    console.log(images);
                    picturesBlock[i].src = images[i].big;
                })
            })(i);
        }
    }
};