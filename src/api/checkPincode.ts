import { CheckPincodePayload } from "../types/general";

export async function checkPincode(data: CheckPincodePayload): Promise<boolean> {
    if(data.pincode === "2021") {
        return true;
    }    
    return false;
}