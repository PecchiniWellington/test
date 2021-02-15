import * as actionTypes from "./user-list.action-type";

const initialState = {
  users: [],
  errorMessage: "",
  isFetching: false,
  listUsersToCancel: [],
  successMessage: "",
  showToast: "",
};

export const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_ACTION:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_USERS_ACTION_SUCCESS:
      return { ...state, users: action.payload, isFetching: false };
    case actionTypes.FETCH_USERS_ACTION_ERROR:
      return { ...state, errorMessage: action.payload, isFetching: false };
    case actionTypes.CANCELLING_USERS_ACTION:
      return {
        ...state,
        listUsersToCancel: [...state.listUsersToCancel, action.payload],
      };
    case actionTypes.CONFIRM_CANCEL_USER_ACTION:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.CONFIRM_CANCEL_USER_ACTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        showToast: "show",
        successMessage: `users: ${state.listUsersToCancel} cancellati con successo`,
      };
    case actionTypes.CONFIRM_CANCEL_USER_ACTION_ERROR:
      return {
        ...state,
        isFetching: false,
        showToast: "show",
        errorMessage: "qualcosa non è andata",
      };
    case actionTypes.HIDE_TOAST_ACTION:
      return {
        ...state,
        showToast: "",
      };
    default:
      return state;
  }
};
