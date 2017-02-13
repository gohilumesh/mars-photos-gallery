import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import photosReducer from './../gallery/reducers/gallery-photos-reducer';
//import filterReducer from './filter-reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  photos: photosReducer
  
});

export default rootReducer;
