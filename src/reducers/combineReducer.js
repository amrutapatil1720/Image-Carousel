import { combineReducers } from 'redux';
import carouselReducer from './carouselReducer';

const rootReducer = combineReducers({
  carousel: carouselReducer
});

export default rootReducer;
