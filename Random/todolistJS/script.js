(function toDoList() {
    let input = document.getElementsByClassName('todolist__controls-input')[0];
    let count = 1;
    let doneCount = 0;
    let tasks;
    let progressBar = document.getElementsByClassName('todolist__progressbar-completed')[0];
    let height = 512;
    let block = document.getElementsByClassName('todolist__inner')[0];
    let addButton = document.getElementsByClassName('todolist__controls-add')[0];

    // for (var i = 0; i < tasks; i++) {
    //     createTask();
    // }

    addButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (input.value) {
            createTask();
            input.value = '';
        }

    });

    function createTask() {
        if (count > 6) {
            block.style.height = +(height+= 60) + 'px';
        }
        let newTask = document.createElement('div');
        newTask.innerHTML = input.value;
        newTask.classList.add('todolist__task');
        let taskDone = document.createElement('button');
        taskDone.innerHTML = 'Done';
        taskDone.classList.add('todolist__task-button')
        newTask.appendChild(taskDone);
        let taskClose = document.createElement('span');
        taskClose.classList.add('todolist__task-close');
        taskClose.innerHTML = '+';
        newTask.appendChild(taskClose);
        block.appendChild(newTask);
        tasks = document.getElementsByClassName('todolist__task');
        taskDone = document.getElementsByClassName('todolist__task-button');
        let closeButtons = document.getElementsByClassName('todolist__task-close');
        taskDone[tasks.length-1].addEventListener('click', function (evt) {
            evt.preventDefault();
            if (!evt.target.parentNode.classList.contains('todolist__task-done')) {
                evt.target.parentNode.classList.add('todolist__task-done');
                doneCount++;
            } else {
                evt.target.parentNode.classList.remove('todolist__task-done')
                doneCount--;
            }
            progressBar.style.width = doneCount / count * 100 + "%";
        });
        closeButtons[tasks.length-1].addEventListener('click', function (event) {
            event.target.parentNode.parentNode.removeChild(event.target.parentNode);
            if (count > 6) {
                block.style.height = +(height-= 60) + 'px';
            }
        });
        count++;
    }

})();
