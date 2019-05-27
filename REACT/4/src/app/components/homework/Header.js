import React, {Component} from 'react';
import Navigation from './navigation'
import Logo from './logo'

export default class KanbanBoard extends Component {
    constructor()
    {
        super(...arguments);
        this.state = {

        };
    }
    render() {
        return (
            <div className={'header'}>
                <Logo/>
                <Navigation/>
            </div>
        )
    }
}