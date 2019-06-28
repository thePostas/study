import React, { Component } from 'react';

const bands = [
    'the Cure',
    'Ramones',
    'Sex Pistols',
    'Joy Division',
    'AC/DC',
    'the White Stripes',
    'the Doors'
];

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }

    state = {
        list: bands
    };

    handleChange = (event) => {
        console.log(event.target.value);
        const filteredItems = bands.filter((item, index) => {
            return item.trim().toLowerCase().match(event.target.value)
        });
        this.setState({
            list: filteredItems
        })
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <li>{item}</li>
                    })}
                </ul>
                <input type={'text'} onChange={this.handleChange}/>
            </div>
        )
    }
}