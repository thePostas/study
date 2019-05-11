import React, {Component} from 'react';
import Item from './HeaderNavigationListItem';

export default class NavigationList extends Component {
    render() {
        let menuItems = this.props.links.map((link, index) => {
            return <Item href={link.href} title={link.title}/>;
        });
            return <ul className={'navigation__list'}>
                {menuItems}
            </ul>
    }
}