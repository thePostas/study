var event, ok, current, gaming = true;

current = works[0];
var arr = [undefined];

while(gaming) {
    var count = 0, answers = '';
    for (var key in current.answer) {
        answers += current.answer[key];
        count++;
                        
    }
    if (count === 0) {
        alert(current.text);
        gaming = false;
        break;
    }
    
    do {
        ok = false;
        event = parseInt(prompt(current.text + answers + "-1 выход из игры"));
        if (event === -1) {
            alert("Спасибо за игру!")
            gaming = false;
            break;
        } else {
            ok = isAnswer(count, event);
            arr.push(current.answer[event]);
        }
    } while(!ok);
    current = works[current.jump[event]];

}

        arr.forEach(function(item, i) {
          console.log("Ход номер " + i + " : " + item);  
        })
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false
    }
    else {
        return true;
    }

}