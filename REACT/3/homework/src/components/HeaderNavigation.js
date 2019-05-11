import React, {Component} from 'react';
import List from './NavigationList';


export default class HeaderNavigation extends Component {
    render() {
        let items = [
            {href: '#', title: 'Home'},
            {href: '#', title: 'Catalog'},
            {href: '#', title: 'Contacts'},
            {href: '#', title: 'About us'}
        ];
        return (
            <div className={'header__navigation'}>
                <List links={items}/>
            </div>
        )
    }
}