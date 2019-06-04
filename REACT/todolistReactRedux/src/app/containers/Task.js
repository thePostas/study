import React, {Component} from 'react';

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskIsDone: false
        }
    }
    render() {
        return (
            <div
                className={this.state.taskIsDone ? 'todolist__task-task todolist__task-task-done' : 'todolist__task-task'}
            >
                <p>
                    {this.props.title}
                </p>
                <span
                    // onClick={this.handleCloseTask}
                    className={'todolist__task-task-close'}>
                    +
                </span>
                <input
                    // onClick={this.isDone}
                    type={'checkbox'}
                    className={'todolist__task-task-checkbox'}/>
            </div>
        )
    }
}