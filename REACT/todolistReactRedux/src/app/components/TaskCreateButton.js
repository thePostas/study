import React, {Component} from 'react';

export default class TaskCreateButton extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.onClick = this.props.onClick.bind(this);
    }
    render = () => {
        return (
            <button
                className={'todolist__task-generator-button'}
                onClick={this.onClick}
            >
                +
            </button>
        )
    }
}