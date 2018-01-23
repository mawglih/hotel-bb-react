import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import myPhoto from '../images/me.jpg';
import { auth, storage } from '../firebase';

const LoginBlock = (props) => {
    props.authUser ? console.log("auth user is: ", props.authUser.email) : console.log("not logged in");
    return(
        <div>
            { props.authUser ? <NavigationAuth authUser={props.authUser} logout={props.logout}/> : <NavigationNonAuth login={props.login}/>}
        </div>
    )
}

// const UserImage = (props) => {
//     console.log("image is: ", auth.doGetCurrentUser.fileUrl);
//     return(
//         auth.doGetCurrentUser.fileUrl
//     );
    
// }

class NavigationAuth extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return(
            <div className="header">
                <nav className="user-nav">
                        
                    <div className="user-nav__icon-box" onClick={this.props.logout}>
                            
                            <svg className="user-nav__icon">
                                    <use xlinkHref="../images/sprite.svg#icon-log-out" />
                            </svg>
                            
                            <span className="user-nav__notification-logout">logout</span>
                        </div>
                 
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
                    {this.props.authUser ?  
                    <div className="user-nav__user">
                        <img src={this.props.authUser.photoURL} alt="photo" className="user-nav__user-photo"/>
                        <span className="user-nav__user-name">{this.props.authUser.displayName}</span>
                    </div>
                    : <div></div>
                    }
                </nav>
            </div>
        )
    }
}

            


    
const NavigationNonAuth = (props) =>
<div className="header">
<nav className="user-nav">
            <div className="user-nav__icon-box" onClick={props.login}>
                
                <svg className="user-nav__icon">
                        <use xlinkHref="../images/sprite.svg#icon-login" />
                </svg>
                
                <span className="user-nav__notification-login">login</span>
            </div>
        {/* <div className="user-nav__icon-box">
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
            <img src={this.state.user.photoURL} alt="photo" className="user-nav__user-photo"/>
            <span className="user-nav__user-name">{this.state.user.displayName}</span>
        </div> */}
    </nav>
</div>
    

export default LoginBlock;