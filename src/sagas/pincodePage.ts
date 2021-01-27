import { takeEvery, take, put, call, select } from "redux-saga/effects";
import { ActionType, Action } from "typesafe-actions";
import { AppActionConstants, appActions } from "../actions/actions";
import { checkPincode } from "../api/checkPincode";

export function* watchPincodeTrigger() {
    yield takeEvery(AppActionConstants.PINCODE_CHECK_TRIGGER, handleCheckPincode);
}

export function* handleCheckPincode(action: ActionType<typeof appActions.pincodeCheckTrigger>) {
    try {
        const response: boolean = yield call(checkPincode, action.payload);        
        yield put(appActions.pincodeCheckSuccess(response));
    } catch (error) {
        console.log("Call to api failed" + error);
    }
}