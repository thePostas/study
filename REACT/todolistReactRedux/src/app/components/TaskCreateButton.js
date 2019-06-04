import React, {Component} from 'react';

export default class TaskCreateButton extends Component{
    constructor(props) {
        super(props);
    }
    render = () => {
        return (
            <button
                className={'todolist__task-generator-button'}
                onClick={this.props.onClick}
            >
                +
            </button>
        )
    }
}