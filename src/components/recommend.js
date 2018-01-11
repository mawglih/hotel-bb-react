import React from 'react';
import photo1 from '../images/u1.jpg';
import photo2 from '../images/u2.jpg';
import photo3 from '../images/u3.jpg';
import photo4 from '../images/u4.jpg';

export default (props) => {
    return(
        <div className="recommend">
            <p className="recomment__count">
                Vika and 3 other friends recommend this hotel.
            </p>
            <div className="recommend__friends">
                <img src={photo1} alt="photo" className="recommend__photo"/>
                <img src={photo2} alt="photo" className="recommend__photo"/>
                <img src={photo3} alt="photo" className="recommend__photo"/>
                <img src={photo4} alt="photo" className="recommend__photo"/>
            </div>
        </div>
    )
}