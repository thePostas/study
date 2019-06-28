import React, {Component} from 'react';


export default class Navigation extends Component {
    constructor()
    {
        super(...arguments);
        this.state = {
            linksData: [
                {
                    name: 'Home',
                    url: '#',
                    active: true
                },
                {
                    name: 'Catalog',
                    url: '#',
                    active: false
                },
                {
                    name: 'Contacts',
                    url: '#',
                    active: false
                },
                {
                    name: 'About us',
                    url: '#',
                    active: false
                },
                    ]
        };
        // this.onClickLink = this.onClickLink.bind(this);
    }


    onClickLink(currentIndex) {
           let currentItems = this.state.linksData.map((item, index) => {
              item.active = (currentIndex === index);
              return item;
           });

           this.setState({
               linksData: currentItems
           });
    }


    render() {
        return (
            <ul className={'navigation__list'}>
                {
                    this.state.linksData.map((link, index) => {
                        console.log(link);
                    return (
                    <li onClick={this.onClickLink.bind(this, index)} className={'navigation__item'}><a href={link.url} className={link.active ? 'navigation__link navigation__link_active' : 'navigation__link'}>{link.name}</a></li>
                    )
                })
                }
            </ul>
        )
    }
}