import React, {Component} from 'react';


export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.checkBox = React.createRef();
        this.handleCloseTask = this.handleCloseTask.bind(this);
        this.isDone = this.isDone.bind(this);
    }

    componentDidMount = () => {
        this.setState({done: !!this.checkBox.current.checked},() => {
            this.props.updateStatus();
        });
    };

    handleCloseTask = () => {
        this.props.taskRemove(this.props.index);
    };

    isDone = () => {
        this.setState({done: !!this.checkBox.current.checked},() => {
            this.props.done = this.state.done;
            this.props.updateStatus();
        });
        console.log(this.state.done);
     };


    render() {
        return (
            <div
                className={this.state.done ? 'todolist__task-task todolist__task-task-done' : 'todolist__task-task'}
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
                    ref={this.checkBox}
                    onClick={this.isDone}
                    type={'checkbox'}
                    className={'todolist__task-task-checkbox'}/>
            </div>
        )
    }
}
