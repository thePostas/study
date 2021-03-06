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
    var form = document.getElementsByClassName('form')[0];
    var inputs = document.getElementsByClassName('form-input');
    var tel = document.getElementsByClassName('tel')[0];
    var button = document.getElementsByClassName('button')[0];
    var formats = [/\+\d{1,3}-\d{3}-\d{3}-\d{2}-\d{2}/, /[A-z]/, /[A-z]/];
    var currentFormat;
    var error = [true, true, true];
    button.addEventListener('click', function (event) {
        event.preventDefault();
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].checkValidity() || !inputs[i].value) {
                inputs[i].parentNode.lastChild.classList.add('error');
                inputs[i].parentNode.lastChild.innerHTML = 'error';
                inputs[i].style.borderColor = 'red';
            } else {
                inputs[i].parentNode.lastChild.classList.remove('error');
                inputs[i].parentNode.lastChild.innerHTML = '';
                inputs[i].style.borderColor = 'green';
            }
            if (!error[0] && !error[1] && !error[2]) {
                form.submit();
            }
        }
    });

    for (let i = 0; i < inputs.length; i++) {
        // inputs[i].pattern = formats[i];
        inputs[i].addEventListener('input', function () {
            currentFormat = formats[i];

            if(!currentFormat.test(inputs[i].value) || !inputs[i].value) {
                inputs[i].setCustomValidity('error');
                inputs[i].style.outlineColor = 'red';
                inputs[i].style.borderColor = 'red';
                error[i] = true;
                // button.disabled = true;
            } else {
                // button.disabled = false;
                inputs[i].setCustomValidity('');
                inputs[i].style.outlineColor = 'green';
                inputs[i].style.borderColor = 'green';
                error[i] = false;
            }
        });
    }
})();

var a = 'vasya vs petya'.replace(/(vasya|petya)/g, function (str) {
    return str.toUpperCase();
});

console.log(a);

(function polinom() {
    var input = prompt().split(' ').join('').split(',').join('').toLowerCase();
    var reverse = input.split('').reverse().join('');
    console.log(input);
    console.log(reverse);
    var result = true;
    for (var i = 0; i < input.length; i++) {
        if (input[i] !== reverse[i]) {
            result = false;
        }
    }
    console.log(result);
})();