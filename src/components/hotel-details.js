import React, { Component } from 'react';
import UserReviews from './user-reviews';
import Paragraphs from './paragraphs';
import List from './list';
import Recommend from './recommend';


class HotelDetails extends Component {
    render() {
        return(
            <div className="detail">
                <div className="description">
                    <Paragraphs />
                    <List />
                    <Recommend />
                </div>
                <div className="user-reviews">
                    <UserReviews />
                    
                </div>
            </div>
        );
    }
}
export default HotelDetails;