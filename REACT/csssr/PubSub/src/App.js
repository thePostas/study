import CounterComponent from './components/CounterComponent';
import EventChannel from './components/EventChannel';
import FormComponent from './components/FormComponent';

const channel = new EventChannel();
const form = new FormComponent(channel).render();
const counter = new CounterComponent(channel).render();

    const app = document.getElementById('app');

    app.appendChild(form);
    app.appendChild(counter);
