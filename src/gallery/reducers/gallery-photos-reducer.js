import * as types from './../actions/action-types';
import initialState from './../../reducers/initial-state';

export default function galleryPhotosReducer(state = initialState.gallery, action) {
  switch (action.type) {
    case types.LOAD_PHOTOS:
      return Object.assign({}, state, {loading: true, error: false});
    case types.LOAD_PHOTOS_SUCCESS:
      return Object.assign({}, state, {photos: action.payload.photos, loading: false, error: false });
    case types.LOAD_PHOTOS_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
}
