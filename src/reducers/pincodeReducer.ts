import { createReducer, action } from "typesafe-actions";
import { produce } from "immer";
import { PinReducerState } from "../types/general"
import { appActions, AppAction } from "../actions/actions";

const initialState: PinReducerState = {
    isOpen: false
}

export const pincodeReducer = createReducer<PinReducerState, AppAction>(initialState)
    .handleAction(appActions.pincodeCheckSuccess, (state, action) => {
        return produce(state, (draftState) => {
                draftState.isOpen = action.payload;
        });
    });
