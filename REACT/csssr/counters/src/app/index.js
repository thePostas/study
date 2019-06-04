import { createStore, combineReducers } from "redux";
import { firstCounterReducer, secondCounterReducer } from "./reducers";

import { Counter } from "./counter";

const initialState = {
    firstCounter: 0,
    secondCounter: 0
};

const reducer = combineReducers({
    firstCounter: firstCounterReducer,
    secondCounter: secondCounterReducer
});

const store = createStore(reducer, initialState);

const firstCounter = new Counter(store, "firstCounter", {
    type: "FIRST_INCREMENT"
});
const secondCounter = new Counter(store, "secondCounter", {
    type: "SECOND_INCREMENT"
});

const app = document.getElementById("app");

app.appendChild(firstCounter.el);
app.appendChild(secondCounter.el);