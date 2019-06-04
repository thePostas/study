import reducer from './reducer';
import {createStore} from "./redux";

const display = document.getElementById('counterResult');
const button = document.getElementById('incrementButton');
let initialState = 0;
const store = createStore(reducer, initialState);


const incrementAction = {
    type: 'INCREMENT'
};

button.addEventListener('click', (event) => {
    store.dispatch(incrementAction);
});

store.subscribe(()=> {
    display.innerHTML = store.getState();
});

store.dispatch({});