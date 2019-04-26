import React, {Component} from 'react';

export default class KanbanCheckList extends Component {
    render() {
        let tasks = this.props.tasks.map((task, index) => {
            return <li className={'checklist-task'}>
                <input type={'checkbox'} defaultChecked={task.done}/> &nbsp;
                {task.name}
            </li>
        });
        return <div className={'checklist'}>
            <ul>
                {tasks}
            </ul>
        </div>
    }
}