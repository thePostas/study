import React, {Component} from 'react';
import Card from './KanbanCard';

export default class KanbanList extends Component
{
    render()
    {
        console.log(this.props);
        let cards = this.props.cards.map((card, index)=> {
            return <Card
                id={card.id}
                title={card.title}
                description={card.description}
                tasks={card.tasks}
                key={index}
            />
        });

        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}