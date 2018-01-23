import React, { Component } from 'react';
import UserReviewItem from './user-review-item';
import { ReviewData } from '../utils/review-data';

class UserReviews extends Component {
    renderReview() {
        return(
            ReviewData.map((item) => {
                if(ReviewData.indexOf(item)<2) {
                    return <UserReviewItem key={ReviewData.indexOf(item)} name={item.name} image={item.image} text={item.text} date={item.date} rating={item.rating}/>
                }
                return false;
            })
        )
    }
    render() {
        return(
            <div className="user-reviews">
                {this.renderReview()}
                <button className="btn-inline">Show all <span>&rarr;</span></button>
            </div>
            
            );
    }
}
export default UserReviews;