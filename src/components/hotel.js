import React, { Component } from 'react';
import Header from './header';
import Main from './main';


class Hotel extends Component {
    render() {
        return(
            <div className="container">
                <Header />
                <Main />
            </div>
        )
    }
}
export default Hotel;