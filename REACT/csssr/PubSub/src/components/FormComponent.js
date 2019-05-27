export default class FormComponent {
    constructor(channel) {
        this.el = document.createElement('form');
        this.el.classList.add('form');

        this.el.addEventListener('input', (event) => {
            const counter = event.target.value.length;
            channel.dispatch('CHANGE_TEXT', counter);
        });
    }

    render() {
        this.el.innerHTML = '<label class="form__input-wrapper">' +
            '<span class="form__label">Введите текст</span>' +
            '<input class="form__input" type="text" placeholder="Привет">' +
            '</label>';
        return this.el;
    }
}