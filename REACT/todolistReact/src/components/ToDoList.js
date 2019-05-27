import React, {Component} from 'react';
import TaskGenerator from '../components/TaskGenerator';
import TaskList from '../components/TaskList'

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            ...props
        };
        this.updateTasks = this.updateTasks.bind(this);
    }

    updateTasks = (value) => {
        this.setState({ tasks: value })
    };

    render() {
        return (
            <div
                className={'todolist'}
            >
                <TaskGenerator
                    updateTasks={this.updateTasks}
                />
                <TaskList tasks={this.state.tasks}/>
            </div>
        )
    }
}