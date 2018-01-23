import React, { Component } from 'react';
import HotelView from './hotel-view';
import Actions from './actions';

class Main extends Component {
    render() {
        return(
            <div >
           
              
                <div className="hotel-view">
                   <HotelView/>
                   <Actions />
                </div>
               
            </div>
        )
    }
}
export default Main;