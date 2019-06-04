import React, {Component} from 'react';

export default class ProgressBar extends Component{
    render = () => {
        return (
            <div
                className={'todolist__progress-bar'}>
                <p
                    className={'todolist__progress-bar-percent'}>
                    {/*{this.state.percent}%*/}
                </p>
                <div
                    className={'todolist__progress-bar-done'}
                    // style={{width: this.state.percent + '%'}}
                />
            </div>
        )
    }
}

