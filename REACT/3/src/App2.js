import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './app/components/kanban/KanbanBoard';

const app = document.getElementById('app');

const items = [
    {
        id: 1,
        title: 'Освоить ReactJS',
        description: 'Освоить библиотеку ReactJS v14.0+',
        status: 'in-progress',
        tasks: []
    },
    {
        id: 2,
        title: 'Написать приложение на ReactJS',
        description: 'Kanban Board',
        status: 'todo',
        tasks: [
            {
                id: 1,
                name: 'Изучить базовый синтаксис ReactJS',
                done: true
            },
            {
                id: 2,
                name: 'Написать каркас приложения',
                done: true
            },
            {
                id: 3,
                name: 'Улучшить приложение',
                done: false
            }
        ]
    },
];

ReactDOM.render(
    <KanbanBoard cards={items} />,
    app);