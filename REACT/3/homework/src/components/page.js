import React, {Component} from 'react';
import Header from './Header';

export default class Page extends Component {
    render() {
        return (
            <div className={'page-wrapper'}>
                <Header/>
            </div>
        )
    }
}