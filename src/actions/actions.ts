import { ActionType, createAction } from "typesafe-actions";
import { CheckPincodePayload } from "../types/general"


export enum AppActionConstants {
    PINCODE_CHECK_TRIGGER = "APP/PINCODE_CHECK_TRIGGER",
    PINCODE_CHECK_SUCCESS = "APP/PINCODE_CHECK_SUCCESS"
}

export const appActions = {
    pincodeCheckTrigger: createAction(AppActionConstants.PINCODE_CHECK_TRIGGER)<CheckPincodePayload>(),
    pincodeCheckSuccess: createAction(AppActionConstants.PINCODE_CHECK_SUCCESS)<boolean>()
}

export type AppAction = ActionType<typeof appActions>;
