import { all, call } from "redux-saga/effects";
import { userListWatcher } from "./user-list/user-list.saga";

export default function* rootSaga() {
  yield all([userListWatcher()]);
}
