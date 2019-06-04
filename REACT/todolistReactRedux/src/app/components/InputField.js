import React, {Component} from 'react';

export default class InputField extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }


    render = () => {
        return (
            <input
                onChange={this.props.onChange}
                type={'text'}
                value={this.props.value}
                className={'todolist__task-generator-input'}
            />
        )
    }
}