import * as actionTypes from './actionTypes';
import * as sharedActionTypes from '../../shared/actionTypes';

function notificationReducer(state, action) {
  switch (action.type) {
    case sharedActionTypes.ALERT:
    case sharedActionTypes.RESET_ALERT:
      return Object.assign({}, state, {
        alert: action.alert,
      });
      break;

    default:
      return Object.assign({}, state, {});
      break;
  }
}

export default notificationReducer;
