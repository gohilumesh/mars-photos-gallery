import ApiPhotos from './../../api/api-photos';
import * as types from './action-types';

const loadPhotosSuccess = photos => {
  return {
    type: types.LOAD_PHOTOS_SUCCESS, payload: photos
  };
};

const loadPhotosError = () => {
  return {
    type: types.LOAD_PHOTOS_ERROR
  };
};

export function loadPhotos() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    dispatch({type: types.LOAD_PHOTOS});
    return ApiPhotos.getPhotos().then(photos => {
      dispatch(loadPhotosSuccess(photos));
    }).catch(error => {
      dispatch(loadPhotosError());
    });
  };
}

export function filterByQuery(query) {
  return function(dispatch) {
      dispatch({type: types.UPDATE_FILTER, payload: {query}});
  }
}

export function filterByCamera(name) {
  return function(dispatch) {
    dispatch({type: types.UPDATE_FILTER, payload: {camera: name}});
  }
}
