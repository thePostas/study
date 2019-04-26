import React from 'react';
import MenuItem from './MenuItem';
export default class Menu extends React.Component {
    render() {
        let menuItems = this.props.items.map((value, index) => {
            return <MenuItem key={'index' + index} href={value.href} title={value.title}/>;
        });
        return <div>
            <h1>{this.props.h1}</h1>
            <ul>
                {menuItems}
            </ul>
            {this.props.children}
        </div>
    }
}