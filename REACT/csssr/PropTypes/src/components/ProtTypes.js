import React, {Component} from 'react';
import PropTypes from 'prop-types';
import func from '../components/func';

export default class Greeting extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                {func()}
            </div>
        );
    }
}

Greeting.propTypes = {
    name: PropTypes.string
};

Greeting.defaultProps = {
    name: 'Stranger'
};