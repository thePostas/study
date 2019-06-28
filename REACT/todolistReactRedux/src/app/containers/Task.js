import React, {Component} from 'react';
import { connect } from "react-redux";

class Task extends Component {
    constructor(props) {
        super(props);
        this.checkBox = React.createRef();
        this.state = {
            taskIsDone: false
        };
        this.markAsDone = this.props.markAsDone.bind(this);
        this.handleDeleteTask = this.props.handleDeleteTask.bind(this);
    }

    render() {
        return (
            <div
                className={this.state.taskIsDone ? 'todolist__task-task todolist__task-task-done' : 'todolist__task-task'}
                key={this.state.index}
            >
                <p>
                    {this.props.title}
                </p>
                <span
                    onClick={this.handleDeleteTask}
                    className={'todolist__task-task-close'}>
                    +
                </span>
                <input
                    ref={this.checkBox}
                    onClick={this.markAsDone}
                    type={'checkbox'}
                    className={'todolist__task-task-checkbox'}/>
            </div>
        )
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        markAsDone: function() {
                this.setState({taskIsDone: this.checkBox.current.checked},() => {
                    dispatch({
                        type: "UPDATE_TASKS",
                        payload: {
                            key: this.props.taskIndex,
                            isDone: this.state.taskIsDone,
                        }
                    });
                });
        },
        handleDeleteTask: function() {
            dispatch({
                type: "DELETE_TASK",
                payload: {
                    targetIndex: this.props.taskIndex
                }
            })
        }
    };

};

export const TaskItem = connect(
    null,
    mapDispatchToProps
)(Task);