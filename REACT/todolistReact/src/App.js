import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/ToDoList';

(function toDoList() {
    const app = document.getElementById('app');
    let tasks = [];
    ReactDOM.render(<ToDoList tasks={tasks}/>, app);
    let taskCount = 0;
    let doneCount = 0;
    let addButton = document.getElementsByClassName('todolist__task-generator-button')[0];
    let inputText = document.getElementsByClassName('todolist__task-generator-input')[0];
    let progressBar = document.getElementsByClassName('todolist__progress-bar-done')[0];
    let percents = document.getElementsByClassName('todolist__progress-bar-percent')[0];
    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (inputText.value) {
            tasks.push({title: inputText.value});
            let closeButtons = document.getElementsByClassName('todolist__task-task-close');
            let doneTasks = document.getElementsByClassName('todolist__task-task-checkbox');
            ReactDOM.render(<ToDoList tasks={tasks}/>, app);
            closeButtons[taskCount].addEventListener('click', (evt) => {
                evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
                taskCount--;
                if (evt.target.parentNode.classList.contains('todolist__task-task-done')) {
                    doneCount--;
                }
                if (taskCount === 0) {
                    progressBar.style.width = 0 + '%';
                    percents.innerHTML = 0 + '%'
                } else progress();
            });
            doneTasks[taskCount].addEventListener('click', (event) => {
                if (event.target.checked) {
                    event.target.parentNode.classList.add('todolist__task-task-done');
                    doneCount++;
                    progress();
                } else {
                    event.target.parentNode.classList.remove('todolist__task-task-done');
                    doneCount--;
                    progress();
                }
            });
            taskCount++;
            progress();
            inputText.value = '';
        }
    });

    function progress() {
        console.log(doneCount / taskCount * 100);
        progressBar.style.width = doneCount / taskCount * 100 + '%';
        percents.innerHTML = Math.floor(doneCount / taskCount * 100) + '%';
    }
})();