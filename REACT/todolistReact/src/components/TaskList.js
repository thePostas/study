import React from 'react';
import PropTypes from "prop-types";

const TaskList = props => {
    return (
        <div className={'todolist__task-list'}>
            {props.tasks}
        </div>
    );
};


TaskList.PropTypes = {
    tasks: PropTypes.tasks
};

TaskList.defaultProps = {
    tasks: [
            <div className={'todolist__task-task'}>defaultTask</div>
    ]
};


export default TaskList;