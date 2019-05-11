import React from 'react';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {
    render() {
        console.log(this.props);

        let menuItems = this.props.items.map(function (value, index) {
            //console.log(index, value);
            return <MenuItem key={'prefix' + index} href={value.href} title={value.title} />;
        });

        return <div><h1>{this.props.h1}</h1>
            <ul>
                {menuItems}
            </ul>
            <p>{this.props.children}</p>
        </div>;
    }
}