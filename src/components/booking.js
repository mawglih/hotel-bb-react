import React, { Component } from 'react';
import CreateReservation from './create-reservation';

class Booking extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="signup__page">
                <CreateReservation authUser={this.props.authUser}/>
            </div>
        )
    }
}
export default Booking;