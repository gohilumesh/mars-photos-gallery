import initialState from './initial-state';
import * as types from './../gallery/actions/action-types';

export default function filterReducer(state = initialState.filter, action) {
  switch(action.type) {
    case types.UPDATED_FILTER:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
