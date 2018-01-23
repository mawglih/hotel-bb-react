import React from 'react';
import Header from './header';
import Main from './main';


export default (props) => {
        return(
            <div className="container">
                <Header authUser={props.authUser}/>
                <Main />
            </div>
        );
    }