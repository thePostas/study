import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { FirstCounter } from "./containers/firstCounter";
import { SecondCounter } from "./containers/secondCounter";

import { store } from "./store";

class App extends Component {
    render() {
        return [<FirstCounter />, <SecondCounter />];
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
