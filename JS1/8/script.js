// var arr1 = [50, 60, 70];
// var arr2 = [112, 17, 9];
//
// function calculate(x, ...ect) {
//     console.log(arguments);
//     console.log(ect);
//     var arr3 = arr1.concat(arr2);
//     console.log(arr3);
//     console.log(ect[0]);
// }
//
// calculate(555, arr1, arr2);


var button1 = document.getElementsByClassName('button')[0];
var button2 = document.getElementsByClassName('button')[1];
var button3 = document.getElementsByClassName('button')[2];
button1.addEventListener('click', counter());
button2.addEventListener('click', counter());
button3.addEventListener('click', (function () {
    count = 0;
    return function () {
        console.log(count);
        return count++
    }
})());

function counter() {
    var count = 0;
    return function () {
        console.log(count);
        return count++;
    }
}
//
// function b1() {
//     return function (b2) {
//         var b = 0;
//         return function (b3) {
//             return b++;
//         }
//     }
// }
//
// var counter2 = b1()();
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
