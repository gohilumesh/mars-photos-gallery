import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import photos from './../gallery/reducers/gallery-photos-reducers';


const rootReducer = combineReducers({
  routing: routerReducer,
  photos
});

export default rootReducer;
