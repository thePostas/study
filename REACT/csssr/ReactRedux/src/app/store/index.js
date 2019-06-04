import { createStore, combineReducers } from "redux";
import { firstCounterReducer, secondCounterReducer } from "./reducers";

const initialState = {
    firstCounter: 0,
    secondCounter: 0
};

const reducer = combineReducers({
    firstCounter: firstCounterReducer,
    secondCounter: secondCounterReducer
});

export const store = createStore(reducer, initialState);
