import React, {Component} from 'react';
import TaskInput from "./TaskInput";
import ProgressBar from "../components/ProgressBar";

export default class TaskGenerator extends Component {
    render() {
        return (
            <form className={'todolist__task-generator'}>
                <legend className={'todolist__task-generator-legend'}>to do list</legend>
                <TaskInput/>
                <ProgressBar/>
            </form>
        )
    }
}