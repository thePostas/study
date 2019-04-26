import React, {Component} from 'react';
import Card from './KanbanCard';

export default class KanbanList extends Component {
    render() {
        let cards = this.props.cards.map((card, index) => {
            return <Card
                id={card.id}
                title={card.title}
                decription={card.description}
                tasks={card.tasks}
                key={index}
            />
        });
        return <div className={'List'}>
            <h1>{this.props.title}</h1>
            {cards}
        </div>;
    }
}