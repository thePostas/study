import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import { store } from './store';
import { Provider } from 'react-redux'

const app = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <Form/>
    </Provider>,
    app);