import { all, fork } from "redux-saga/effects";
import { watchPincodeTrigger } from "./sagas/pincodePage";

export function* rootSaga() {
    yield all([
        fork(watchPincodeTrigger)
    ]);
}