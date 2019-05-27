import React, {Component} from 'react';

export default class light extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return <div
            className={'shape'}
            style={{background: this.props.colors.active ? this.props.colors.color : 'white'}}/>

    }
}
