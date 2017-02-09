import * as types from './../actions/action-types';
import initialState from './initial-state';

export default function galleryPhotosReducer(state = initialState.photos, action) {
  switch (action.type) {
    case types.LOAD_PHOTOS_SUCCESS:
      return action.payload.photos;
    default:
      return state;
  }
}
