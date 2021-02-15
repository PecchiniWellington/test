import * as actionTypes from './counter.action-type';


export const incrementAction = (increment) => ({ type: actionTypes.INCREMENT_ACTION, payload: increment });
export const decrementAction = (decrement) => ({ type: actionTypes.DECREMENT_ACTION, payload: decrement });
export const resetAction = (reset) => ({ type: actionTypes.RESET_ACTION, payload: reset });
export const hideToastAction = (hide) => ({type: actionTypes.HIDE_TOAST_ACTION, payload: hide})
