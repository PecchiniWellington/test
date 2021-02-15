import * as userListActionTypes from "./user-list.action-type";

export const fetchUserStart = () => ({
  type: userListActionTypes.FETCH_USERS_ACTION,
});
export const fetchUserActionSuccess = (user) => ({
  type: userListActionTypes.FETCH_USERS_ACTION_SUCCESS,
  payload: user,
});
export const fetchUserActionError = (error) => ({
  type: userListActionTypes.FETCH_USERS_ACTION_ERROR,
  payload: error,
});

export const onCancelingUserAction = (userId) => ({
  type: userListActionTypes.CANCELLING_USERS_ACTION,
  payload: userId,
});

export const deleteUserActionStart = (usersId) => ({
  type: userListActionTypes.CONFIRM_CANCEL_USER_ACTION,
  payload: usersId,
});
export const deleteUserActionSuccess = () => ({
  type: userListActionTypes.CONFIRM_CANCEL_USER_ACTION_SUCCESS,
});
export const deleteUserActionError = () => ({
  type: userListActionTypes.CONFIRM_CANCEL_USER_ACTION_ERROR,
});
export const hideToastAction = (hide) => ({type: userListActionTypes.HIDE_TOAST_ACTION, payload: hide})