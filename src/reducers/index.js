import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import galleryPhotosReducer from './../gallery/reducers/gallery-photos-reducer';
import filterReducer from './filter-reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  gallery: galleryPhotosReducer,
  filter: filterReducer
});

export default rootReducer;
