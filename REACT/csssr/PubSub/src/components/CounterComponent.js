export default class CounterComponent {
    constructor(channel) {
        this.el = document.createElement('p');
        this.el.classList.add('counter');
        this.value = 0;

        channel.subscribe("CHANGE_TEXT", (counter) => {
            this.value = counter;
            this.render();
        })
    }

    render() {
        this.el.textContent = 'Количество символов: ' + this.value;
        return this.el;
    }
}