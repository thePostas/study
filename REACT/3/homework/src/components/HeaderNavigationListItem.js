import React, {Component} from 'react';

export default class Page extends Component {
    render() {
        return (
            <li className={'navigation__list-item'}><a href={this.props.href}>{this.props.title}</a></li>
        )
    }
}