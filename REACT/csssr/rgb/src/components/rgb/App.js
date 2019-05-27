import React, {Component} from 'react';
import Color from './Color'
import Button from './Button'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.checkUpdates = this.checkUpdates.bind(this);
    }


    checkUpdates(currentIndex) {
        let activeColor = this.props.colors.map((obj, index) => {
            obj.active = (currentIndex === index);
            return obj;
        });

        this.setState({
            colors: activeColor
        });
    }

    render() {
        return (
            <div
                className={'container'}
            >
                <div
                    className={'buttons'}
                >
                    {this.state.colors.map((obj, index) => <Button index={index} colors={obj} checkUpdates={this.checkUpdates}/>)}
                    <button
                        className={'reset'}>
                        сброс
                    </button>
                </div>
                <div
                    className={'shapes'}
                >
                    {this.state.colors.map((obj) => <Color colors={obj}/>)}
                </div>
            </div>

        )
    }
}