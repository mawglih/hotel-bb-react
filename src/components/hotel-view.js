import React, { Component } from 'react';
import {HotelData} from '../utils/hotel-data';
import HotelDetails from './hotel-details';

class HotelView extends Component {
    renderImages() {
        return HotelData.map((item) => {
            return (
            <figure className="gallery__item" key={HotelData.indexOf(item)}>
                <img src={item.image} alt="Hotel photo" className="gallery__photo"/>
            </figure>
        )
        });
    }
    renderStar() {
        return(
            <svg className="overview__icon-star" >
                <use xlinkHref="images/sprite.svg#icon-star"></use>
            </svg>
            
        );
    }
    
    render() {
        return(
            <div className="hotel-view">
                <div className="gallery">
                    {this.renderImages()}
                    
                </div>
                <div className="overview">
                    <h1 className="overview__heading">Bed and Breakfast</h1>
                    <div className="overview__stars">
                        {this.renderStar()}
                        {this.renderStar()}
                        {this.renderStar()}
                        {this.renderStar()}
                        {this.renderStar()}
                    </div>
                
                <div className="overview__location">
                    <svg className="overview__icon-location" >
                        <use xlinkHref="images/sprite.svg#icon-location-pin"></use>
                    </svg>  
                    <button className="btn-inline">Monte Tremblant, Quebec</button>
                </div>
                <div className="overview__rating">
                    <div className="overview__rating-average">8.6</div>
                    <div className="overview__rating-count">435 votes</div>
                </div>
                </div>
                <HotelDetails />
            </div>
        )
    }
}
export default HotelView;