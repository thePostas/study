import React, {Component} from 'react';

export default class InputField extends Component{
    render = () => {
        return (
            <input
                type={'text'}
                className={'todolist__task-generator-input'}
            />
        )
    }
}