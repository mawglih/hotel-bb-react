import React from 'react';
import logo from '../images/bb-logo.png';
import LoginBlock from './login-block';
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
                <LoginBlock authUser={props.authUser} login={props.login} logout={props.logout}/>
            </header>
      </div>
    )
}