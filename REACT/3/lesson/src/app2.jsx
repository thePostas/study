import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './app/components/menu/Menu';

const app = document.getElementById('app');

const items = [
    {
        href: '/',
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

ReactDOM.render(
    <Menu items={items} h1="Наше меню на React">Информация выводится после меню</Menu>,
app);