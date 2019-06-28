import React, {Component} from 'react';
import { TaskGeneratorContainer } from '../containers/TaskGenerator';
import { TaskListContainer } from '../containers/TaskList';

export default class Form extends Component {

    styles = {
        margin: '0 auto',
        position: 'relative',
        width: 500,
        height: 610,
        backgroundColor: 'antiquewhite',
        overflow: 'auto',
    };

    render = () => {
        return (
            <div
            className={'todolist'}
            style={this.styles}
            >
                <TaskGeneratorContainer/>
                <TaskListContainer/>
            </div>
        )
    }
}