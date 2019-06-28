import React, {Component} from 'react';
import { InputContainer } from '../containers/InputContainer';
import { ProgressBarContainer }from '../containers/ProgressBar';
import { CreateButton } from '../containers/TaskCreateButtonContainer';
import {connect} from "react-redux";



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
                <ProgressBarContainer percent={this.props.percent}/>
            </form>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        percent: state.percent
    };
};

export const TaskGeneratorContainer = connect(
    mapStateToProps
)(TaskGenerator);