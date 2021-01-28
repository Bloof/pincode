import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "./actions/actions";
import { AppState } from "./types/general";
import { FaLock, FaLockOpen } from 'react-icons/fa';

const App: React.FC = () => {

  const dispatch = useDispatch();
  const [pincode, setPincode] = useState("");
  const { isOpen } = useSelector(
    (state: AppState) => {
      return state;
    }
  );

  const createPincode = (number: string) => {
    setPincode(pincode + number)
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

      <div>{isOpen ? <FaLockOpen size="100" /> : <FaLock size="100" />}</div>
    </div>



  )
}

export default App;
