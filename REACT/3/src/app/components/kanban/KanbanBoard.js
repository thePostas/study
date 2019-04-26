import React, {Component} from 'react';
import List from './KanbanList';

export default class KanbanBoard extends Component {
    render() {
        return (
            <div className={'app'}>
                <List id={'todo'} title={'To do'}
                      cards={this.props.cards.filter((card) => card.status === 'todo')}/>
                <List id={'in-progress'} title={'in progress'}
                      cards={this.props.cards.filter((card) => card.status === 'in-progress')}/>
                <List id={'done'} title={'done'}
                      cards={this.props.cards.filter((card) => card.status === 'done')}/>
            </div>
        )
    }
}