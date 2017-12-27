import React, { Component } from 'react';
import { NavData } from '../utils/nav-data';


class Navigation extends Component {
    renderListItem(){
        return NavData.map((item) => {
            return <li className='side-nav__item' key={NavData.indexOf(item)}>
            <a href="#" className="side-nav__link">
                <svg className="side-nav__icon">
                    <use xlinkHref={item.svgName}></use>
                </svg>
                <span>{item.name}</span>
            </a>
        </li>
        })
    }
    render() {
        return(
            <nav className="side">
                <ul className="side-nav">
                    {this.renderListItem()}
                </ul>
                <div className="legal">
                    &copy; 2017 Oleg Markoff
                </div>
            </nav>
        )
    }
}
export default Navigation;