import React, {Component} from 'react';
import TaskGenerator from '../components/TaskGenerator';
import Task from '../components/Task';


export default class ToDoList extends Component {
    render() {
        let taskList = this.props.tasks.map((task)=> {
            return <Task title={task.title}/>
        });
        return (
            <div className={'todolist'}>
                <TaskGenerator/>
                <div className={'todolist__tasks'}>
                    {taskList}
                </div>
            </div>
        )
    }
}