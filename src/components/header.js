import React from 'react';
import logo from '../images/bb-logo.png';
import myPhoto from '../images/me.jpg';

export default (props) => {
    return(
        <div>
            <header className="header">
                <img src={logo} alt="bb-logo" className="logo"/>
                <form action="#" className="search">
                    <input type="text" className="search__input" placeholder="Search"/>
                    <button className="search__button">
                        <svg className="search__icon">
                            <use xlinkHref="../images/sprite.svg#icon-magnifying-glass" />
                        </svg>
                    </button>
                </form>
                <nav className="user-nav">
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="../images/sprite.svg#icon-bookmark" />
                        </svg>
                        <span className="user-nav__notification">7</span>
                    </div>
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="../images/sprite.svg#icon-chat" />
                        </svg>
                        <span className="user-nav__notification">13</span>
                    </div>
                    <div className="user-nav__user">
                        <img src={myPhoto} alt="photo" className="user-nav__user-photo"/>
                        <span className="user-nav__user-name">Oleg</span>
                    </div>
                </nav>
            </header>
      </div>
    )
}