import React, {Component} from 'react';

export default class ProgressBar extends Component {
    render() {
        return (
            <div className={'todolist__progress-bar'}>
                <p className={'todolist__progress-bar-percent'}>0%</p>
                <div className={'todolist__progress-bar-done'}/>
            </div>
        )
    }
}