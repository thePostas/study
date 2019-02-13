//alert/*('main js 3');
//alert*/('main js 4');

var $_a23; // это переменная
var COLOR_GREEN = '#006600'; // это константа
var a, b, c; // это тоже переменные
a = 2;
b = a;
c = 2 * a - b / 4;
console.log(a, b, c);

// Типы данных
// number
console.log('-----------------------');
console.log('-number-');
console.log(typeof(1));
console.log(1 / 0); // бесконечность
console.log(Math.pow(10, 255)); // бесконечность
console.log(isFinite(1 / 0)); // Проверка на бесконечность
console.log(7 * 'y'); // не число
console.log(isNaN(7 * 'y')); // проверка на не число

// sting
console.log('-----------------------');
console.log('-sting-');
console.log(typeof 'text');
console.log('J' + "S" + 45);
console.log('45'); // это строка
console.log(Number('45')); // а это уже число
console.log(parseInt('45')); // это тоже число

// boolean
console.log('-----------------------');
console.log('-boolean-');
console.log(typeof true);

// object
console.log('-----------------------');
console.log('-object-');
console.log(typeof {name: 'Илья', age: 22, 'friend': 'Игорь'});
console.log({name: 'Илья', age: 22, 'friend': 'Игорь'}); // Пример объекта
var obj = {name: 'Илья', age: 22, friend: 'Игорь'};// Пример объекта
console.log(obj.name);
console.log(obj['name']);
var arr = [1, 'ilya']; // это массив
arr['a1'] = 'a1';
console.log(arr);

// undefined
console.log('-----------------------');
console.log('-undefined-');
console.log(typeof undefined);
var qw;
console.log(qw, typeof qw);

// null
console.log('-----------------------');
console.log('-null-');
console.log(typeof null);
var n = null;
console.log(n);

// function
console.log('-----------------------');
console.log('-function-');
console.log(typeof function () {
});
var f2 = function () {};
console.log(typeof f2);

// Дополнительно
var Tc = +prompt('Введите темпиратуру по Цельсию',40); // Преобразование к числу способ 1
var Tc2 = parseInt(prompt('Введите темпиратуру по Цельсию',40)); // Преобразование к числу способ 2
var Tc3 = Number(prompt('Введите темпиратуру по Цельсию',40)); // Преобразование к числу способ 3
console.log(Tc,Tc2,Tc3);