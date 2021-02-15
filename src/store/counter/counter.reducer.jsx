import * as actionTypes from "./counter.action-type";
import { showToastAction } from "./counter.actions";

const initialState = {
  count: 0,
  showToast: "",
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_ACTION:
      return { ...state, count: state.count + 1 };
    case actionTypes.DECREMENT_ACTION:
      if (state.count <= 0) {
        return { ...state, showToast: "show" };
      } else {
        return { ...state, count: state.count - 1, showToast: "" };
      }
    case actionTypes.RESET_ACTION:
      return { ...state, count: 0 };
    case actionTypes.HIDE_TOAST_ACTION:
      return { ...state, showToast: "" };
    default:
      return state;
  }
};
