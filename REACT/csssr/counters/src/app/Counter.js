export class Counter {
    constructor(store, stateField, action) {
        this.el = document.createElement("div");
        this.el.classList.add("counter");

        this.store = store;
        this.stateField = stateField;
        this.action = action;

        this.unsubscribe = this.store.subscribe(() => {
            this.update();
        });

        this.el.addEventListener("click", event => {
            if (event.target.tagName === "BUTTON") {
                this.handleClick();
            }
        });

        this.render();
    }

    handleClick() {
        this.store.dispatch(this.action);
    }

    update() {
        const value = this.store.getState()[this.stateField];
        this.el.querySelector("#counterResult").innerHTML = value;
    }

    destroy() {
        this.unsubscribe();
    }

    render() {
        this.el.innerHTML = `
      <b class="title">Счетчик</b>
      <div id="counterResult" class="counter-display">0</div>
		  <button id="incrementButton" class="button">+</button>
    `;
        this.update();
    }
}
