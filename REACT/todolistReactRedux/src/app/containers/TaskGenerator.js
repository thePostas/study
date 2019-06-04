import React, {Component} from 'react';
import { InputContainer } from '../containers/InputContainer';
import ProgressBar from '../components/ProgressBar';
import { CreateButton } from '../containers/TaskCreateButtonContainer';



export default class TaskGenerator extends Component{
    constructor(props) {
        super(props);
    }



    render = () => {
        return (
            <form
                className={'todolist__task-generator'}
            >
                <legend className={'todolist__task-generator-legend'}>to do list</legend>
                <div className={'todolist__task-generator-input-wrapper'}>
                    <InputContainer/>
                    <CreateButton/>
                </div>
                <ProgressBar/>
            </form>
        )
    }
}