import React, { Component } from 'react';
import { NavData } from '../utils/nav-data';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    renderListItem(){
        return NavData.map((item) => {
            return <li className='side-nav__item' key={NavData.indexOf(item)}>
            <Link to={item.link} className="side-nav__link">
                <svg className="side-nav__icon">
                    <use xlinkHref={item.svgName}></use>
                </svg>
                <span>{item.name}</span>
            </Link>
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