import React, { Component } from 'react';

class Actions extends Component {
    render() {
        return(
            <div className="cta">
                <h2 className="cta__book-now">Good news! we have 4 free rooms left for your selected date</h2>
                <button className="btn">
                    <span className="btn__visible">Only 4 rooms left</span>
                    <span className="btn__invisible">Book now!</span>
                </button>
            </div>
        );
    }
}
export default Actions;