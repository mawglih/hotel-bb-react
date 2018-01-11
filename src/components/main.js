import React, { Component } from 'react';
import Navigation from './navigation';
import HotelView from './hotel-view';
import Actions from './actions';

class Main extends Component {
    render() {
        return(
            <div className="content">
                <div className="sidebar">
                    <Navigation />
                </div>
                <div className="hotel-view">
                   <HotelView/>
                   <Actions />
                </div>
               
            </div>
        )
    }
}
export default Main;