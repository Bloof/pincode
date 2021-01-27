
export type AppState = PinState;

export type PinState = PinReducerState;

export type PinReducerState = {
    isOpen: boolean;
}

export type CheckPincodePayload = {
    pincode: string;
}