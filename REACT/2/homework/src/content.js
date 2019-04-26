module.exports = function () {
    var content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = 'Вызов из main.js';
    document.body.appendChild(content);
};