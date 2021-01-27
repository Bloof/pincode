import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "./actions/actions";
import { AppState } from "./types/general";
import { AiFillLock, AiFillUnlock } from 'react-icons/ai';

const App: React.FC = () => {

  const dispatch = useDispatch();
  const [pincode, setPincode] = useState("");
  const { isOpen } = useSelector(
    (state: AppState) => {
      return state;
    }
  );

  console.log("open: " + isOpen);

  const createPincode = (number: string) => {
    if((pincode + number).length <= 4)
      setPincode(pincode + number)
  }

  const handleDispatch = () => {
    dispatch(appActions.pincodeCheckTrigger({ pincode }))
  }

  return (
    <div>
      {pincode}
      <div>
        <button onClick={() => createPincode("1")}>1</button>
        <button onClick={() => createPincode("2")}>2</button>
        <button onClick={() => createPincode("3")}>3</button>
      </div>
      <div>
        <button onClick={() => createPincode("4")}>4</button>
        <button onClick={() => createPincode("5")}>5</button>
        <button onClick={() => createPincode("6")}>6</button>
      </div>
      <div>
        <button onClick={() => createPincode("7")}>7</button>
        <button onClick={() => createPincode("8")}>8</button>
        <button onClick={() => createPincode("9")}>9</button>
      </div>
      <div>
      <button onClick={() => setPincode("")}>Clear</button>

        <button onClick={() => createPincode("0")}>0</button>
        <button onClick={() => {
          dispatch(
            appActions.pincodeCheckTrigger({
              pincode
            }))
        }}>OK</button>
      </div>

      <div>{isOpen === true ? <AiFillUnlock size="100" /> : <AiFillLock size="100" />}</div>
    </div>



  )
}

export default App;
