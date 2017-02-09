import ApiPhotos from './../../api/api-photos';
import * as types from './action-types';

export function loadPhotosSuccess(photos) {
  return {
    type: types.LOAD_PHOTOS_SUCCESS, payload: photos
  };
}

export function loadPhotos() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return ApiPhotos.getPhotos().then(photos => {
      dispatch(loadPhotosSuccess(photos));
    }).catch(error => {
      throw(error);
    });
  };
}
