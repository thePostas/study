import React, {Component} from 'react';

export default class Task extends Component {
    render() {
        return (
            <div className={'todolist__task-task'}>
                <p>{this.props.title}</p>
                <span className={'todolist__task-task-close'}>+</span>
                <input type={'checkbox'} className={'todolist__task-task-checkbox'}/>
            </div>
        )
    }
}
