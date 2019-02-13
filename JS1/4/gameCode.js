var event, // Событие, которое выбрал пользователь
    ok, // Проверка ответа
    current, // Текущее событие
    gaming = true; // Идёт игра

current = works[0]; // Начало игры

// Процесс игры
while (gaming) {
    var count = 0, answers = '';
    // Формирование строки ответа
    for (var key in current.answer) {
        answers += current.answer[key];
        count++;
    }
    if (count === 0) { // Здесь выводится последнее событие игры
        alert(current.text);
        gaming = false;
        break;
    }
    // Ввод события и его проверка
    do {
        ok = false;
        event = parseInt(prompt(current.text + answers + '-1 - Выход из игры'));
        if (event === -1) { // Выход из игры
            alert('Спасибо за игру!');
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

/**
 * Функция проверки ответа
 * @param q
 * @param event
 * @returns {boolean}
 */
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