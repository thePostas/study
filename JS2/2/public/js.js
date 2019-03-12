var xhr = new XMLHttpRequest();
xhr.open('GET', 'cats.json', true);
xhr.send();
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if(xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED){
        //Экран ожидания
        //document.getElementById().innerHTML
        console.log('Экран ожидания');
    }
    if(xhr.readyState !== XMLHttpRequest.DONE) return;
    /*
     0 - запрос не инициализирован
     1 - загрузка
     2 - запрос принят
     3 - обмен данными
     4 - запрос выполнен
     */
    console.log('Экран ожидания - отменить');
    if(xhr.status !== 200)
    {
        console.log('Error', xhr.status, xhr.statusText);
    } else {
        var json = xhr.responseText;
        // console.log(json);
        var myCats = JSON.parse(json);
        console.log(myCats[0]);
        var catz = document.getElementById("Catz");
        var data = '';
        for (var i =0 ; i < myCats.length;i++) {
            data += data = "<a href=" + myCats[i].big + " > " + "<img src=" + myCats[i].small + " > " + "</a>";
        }
        catz.innerHTML = data;
    }
};
