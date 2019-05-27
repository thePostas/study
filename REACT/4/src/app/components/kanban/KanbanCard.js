import React, {Component} from 'react';
import CheckList from './KanbanCheckList';

export default class KanbanCard extends Component {
    constructor()
    {
        super(...arguments);
        this.state = {
            user: 'Anna',
            showDetails: false
        };
        console.log('Constructor');
        this.onChangeShowTasks = this.onChangeShowTasks.bind(this)
    }
    //Инициализация компонента
    // getDefaultProps() {
    //     console.log('getDefaultProps')
    // }
    //
    // getInitialState() {
    //     console.log('getInitialState')
    // }
    //
    // componentWillMount() {
    //     console.log('componentWillMount')
    // }
    //
    componentDidMount() {
        console.log('componentDidMount');
        // this.setState({
        //     user: 'Olga'
        // })
    }

    onChangeShowTasks()
    {
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    //Обновление компонента
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }


    render()
    {
        let cardDetails;
        if (this.state.showDetails) {
            cardDetails = (
                <div className={'card__details'}>
                    {this.props.description}
                    <CheckList cardId={this.props.id} tasks={this.props.tasks}/>
                </div>
            )
        }
        console.log('render' + this.state.user);
     return(
            <div className={'card'}>
                <div className={'card__title'} onClick={this.onChangeShowTasks}>{this.state.user} - {this.props.title}</div>
                {cardDetails}
                <button onClick={()=>{
                    this.setState({
                        user: 'Olga'
                    })
                }}>Изменить имя пользователя</button>
        </div>
        )
    }
}