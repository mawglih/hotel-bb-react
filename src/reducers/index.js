import { combineReducers } from 'redux';
import HotelData from './hotel-reducer';

const rootReducer = combineReducers({
    hotelData: HotelData
});

export default rootReducer;