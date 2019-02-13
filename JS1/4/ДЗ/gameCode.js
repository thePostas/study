var event, ok, current, unburnMoney = 0, currentMoney = 0, gaming = true;

current = works[0]; 

while (gaming) {
    var count = 0, answers = "";
    
    for(var key in current.answer) {
        answers += current.answer[key];
        count++;
    }
    if (count === 0) { // Здесь выводится последнее событие игры
        alert(current.text);
        gaming = false;
        break;
    }
    do {
        ok = false;
        event = parseInt(prompt(current.text + answers + '-1 - Забрать деньги'));
        if (event === -1) {
            alert('Спасибо за игру!');
            alert("Ваш выигрыш составил " + currentMoney);
            gaming = false;
            break;
        } else if (current.gameOver) {
            console.log("Это неправильный ответ!\n" + 
                "Ваш выигрыш составил " + unburnMoney);
            gaming = false;
            break;
        }
        else {
            ok = isAnswer(count, event);
        }
    } while (!ok);
    // Переход
    current = works[current.jump[event]];
}

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