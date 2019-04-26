import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './app/components/Menu/Menu';
const app = document.getElementById('app');

const items = [
    {
        href: '/main',
        title: 'Главная'
    },
    {
        href: '/about',
        title: 'О нас'
    },
    {
        href: '/contacts',
        title: 'Контакты'
    }
];

ReactDOM.render(<Menu items={items} h1={'Меню на React'}>Информация из Children</Menu>, app);