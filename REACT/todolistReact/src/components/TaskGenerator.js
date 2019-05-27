import React, {Component} from 'react';
import Task from "../components/Task";

export default class TaskGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            tasks: [],
            percent: 0,
            index: 0
        };
        this.inputField = React.createRef();
        this.handleInput = this.handleInput.bind(this);
        this.createNewTask = this.createNewTask.bind(this);
        this.taskRemove = this.taskRemove.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.calculatePercent = this.calculatePercent.bind(this);
    }

    handleInput = (event) => {
        this.setState({inputValue: event.target.value});
    };

    createNewTask = (e) => {
        e.preventDefault();
        let updatedTasks = this.state.tasks;
        if (this.state.inputValue) {
            updatedTasks.push(<Task
                key={this.state.index}
                index={this.state.index}
                title={this.state.inputValue}
                taskRemove={this.taskRemove}
                updateStatus={this.updateStatus}
            />);
            this.inputField.current.value = '';
            this.setState({
                index: this.state.index + 1,
                tasks: updatedTasks,
                inputValue: ''
            });
            this.calculatePercent();
            this.props.updateTasks(this.state.tasks);
        }
    };

    taskRemove = (targetTask) => {
        let updatedTasks = this.state.tasks;
            updatedTasks.filter((currentTask, index) => {
                if (targetTask === currentTask.props.index) {
                    updatedTasks.splice(index, 1);
                }
            });
            this.setState({
                tasks: updatedTasks
            });
            this.calculatePercent();
            this.props.updateTasks(this.state.tasks);
    };

    updateStatus = () => {
        this.calculatePercent();
    };

    calculatePercent = () => {
        let doneTasks = 0;
        let updatedTasks = this.state.tasks;
        updatedTasks.map((currentTask) => {
          if(currentTask.props.done) {
              doneTasks++
          }
        });
        this.setState({percent: doneTasks === 0 ? 0 : Math.floor(doneTasks / this.state.tasks.length * 100)})
    };

    render() {
        return (
                <form className={'todolist__task-generator'}>
                    <legend
                        className={'todolist__task-generator-legend'}>
                        to do list
                    </legend>
                    <div
                        className={'todolist__progress-bar'}>
                        <p
                            className={'todolist__progress-bar-percent'}>
                            {this.state.percent}%
                        </p>
                        <div
                            className={'todolist__progress-bar-done'}
                            style={{width: this.state.percent + '%'}}
                        />
                    </div>
                    <div className={'todolist__task-generator-input-wrapper'}>
                        <input
                            ref={this.inputField}
                            className={'todolist__task-generator-input'} type={'text'}
                            value={this.state.value}
                            onChange={this.handleInput}
                        />
                        <button
                            onClick={this.createNewTask}
                            className={'todolist__task-generator-button'}>
                            Add
                        </button>
                    </div>
                </form>
        )
    }
}