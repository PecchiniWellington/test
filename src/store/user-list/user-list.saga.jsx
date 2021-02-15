import { put, call, takeEvery, all, takeLatest } from "redux-saga/effects";
import * as actions from "./user-list.actions";
import * as userActionTypes from "./user-list.action-type";
import * as service from "./user-list.service";

export function* fetchUsersAsync() {
  try {
    const users = yield call(service.getUsers);
    yield put(actions.fetchUserActionSuccess(users));
  } catch (error) {
    yield put(actions.fetchUserActionError(error.message));
  }
}

export function* onFetchUserStart() {
  yield takeLatest(userActionTypes.FETCH_USERS_ACTION, fetchUsersAsync);
}

export function* deleteUserActionAsync(action) {
  try {
    yield call(service.deleteUser, action.payload);
    yield put(actions.deleteUserActionSuccess());
  } catch (error) {
    yield put(actions.deleteUserActionError());
  }
}
export function* onDeleteUserStart() {
  yield takeLatest(
    userActionTypes.CONFIRM_CANCEL_USER_ACTION,
    deleteUserActionAsync
  );
}

export function* userListWatcher() {
  yield all([call(onFetchUserStart), call(onDeleteUserStart)]);
}
