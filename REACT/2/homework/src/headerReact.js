import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component{
    render() {
        return <div className={'header-react'}>React</div>
    }
}
ReactDOM.render(<Header/>, document.body);
