module.exports = function () {
    var footer = document.createElement('div');
    footer.innerHTML = 'Вызов из index.html';
    footer.classList.add('footer');
    document.body.appendChild(footer);
};