// console.log(/abc/.test('abracadabc'));
// console.log(/[0123456789]/.test('Сейчас 2019 год'));
// console.log(/[0-9]/.test('Сейчас 2019 год'));
// console.log(/\d/.test('Сейчас 2019 год')); //Любая цифра
// console.log(/\w/.test('Сейчас 2019 год')); //Буква, цифра или подчеркивание
// console.log(/\s/.test('Сейчас 2019 год')); //Любой символ
// console.log(/\D/.test('Сейчас 2019 год')); //Любой символ, кроме цифры
// console.log(/\W/.test('Сейчас 2019 год')); //Любой символ, кроме буквы, цифры или подчеркивания
// console.log(/\S/.test('Сейчас 2019 год')); //Любой символ, кроме пробела, табуляции или перевода строки
// console.log(/\./.test('Сейчас 2019 год')); //Любой символ, кроме перевода строки

// console.log(format.test('+7-909-988-35-60'));


(function validation () {
    var form = document.getElementsByClassName('form')[0];1111ё12вы
    var inputs = document.getElementsByClassName('form-input');
    var tel = document.getElementsByClassName('tel')[0];
    var button = document.getElementsByClassName('button')[0];
    var formats = [/\+\d{1,3}-\d{3}-\d{3}-\d{2}-\d{2}/, /[A-z]/, /[A-z]/];
    var currentFormat;
    var error = true;
    button.addEventListener('click', function (event) {
        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].checkValidity()) {
                event.preventDefault();
                var error = document.createElement('span');
                error.innerHTML = 'incorrect';
                error.style.color = 'red';
                inputs[i].parentNode.appendChild(error);
            }
            if (error === false) {
                form.submit();
            }
        }
    });

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('input', function () {
            currentFormat = formats[i];
            if(currentFormat.test(inputs[i].value)) {
                // button.disabled = false;
                inputs[i].setCustomValidity('');
                inputs[i].style.outlineColor = 'green';
                inputs[i].style.borderColor = 'green';
            } else {
                inputs[i].setCustomValidity('123');
                error = true;
                inputs[i].style.outlineColor = 'red';
                inputs[i].style.borderColor = 'red';
                // button.disabled = true;
            }
        });
    }
})();