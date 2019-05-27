import React, {Component} from 'react';

export default class Button extends Component {
    constructor() {
        super();
        this.state = {

        };
    }


    render() {
        return <button
            onClick={()=>this.props.checkUpdates(this.props.index)}
            className={this.props.colors.name}>{this.props.colors.name}
            </button>
    }
}





