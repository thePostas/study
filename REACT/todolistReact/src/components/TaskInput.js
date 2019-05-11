import React, {Component} from 'react';

export default class TaskInput extends Component {
    render() {
        return (
            <div className={'todolist__task-generator-input-wrapper'}>
                <input className={'todolist__task-generator-input'} type={'text'}/>
                <button className={'todolist__task-generator-button'}>Add</button>
            </div>
        )
    }
}