import React, {Component} from 'react';
import Logo from './Logo';
import Navigation from './HeaderNavigation';

export default class Header extends Component {
    render() {
        return (
            <div className={'header'}>
                <Logo/>
                <Navigation/>
            </div>
        )
    }
}