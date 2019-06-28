import React, { Component } from 'react';
import { connect } from "react-redux";

class ProgressBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.calculatePercent = this.props.calculatePercent.bind(this);
    }

    componentDidUpdate() {
        this.calculatePercent();
    }

    render = () => {
        return (
            <div
                className={'todolist__progress-bar'}>
                <p
                    className={'todolist__progress-bar-percent'}>
                    {this.props.percent}%
                </p>
                <div
                    className={'todolist__progress-bar-done'}
                    style={{width: this.props.percent + '%'}}
                />
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        tasks: state.tasks
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        calculatePercent: function() {
            this.props.doneTasks = 0;
            this.props.tasks.map((currentTask) => {
                currentTask.props.taskIsDone ? this.props.doneTasks+=1 : this.props.doneTasks;
        });
        const percent = this.props.tasks.length > 0 ? Math.floor(this.props.doneTasks / this.props.tasks.length * 100) : 0;
        dispatch({
            type: "CALCULATE_PERCENT",
            payload: {
                total: percent
            }
        });
    }
    };
};

export const ProgressBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProgressBar);