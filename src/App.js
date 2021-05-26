import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, reset } from "./store/balance/actions";
import { selectBalance } from "./store/balance/selectors";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const [textValue, set_textValue] = useState(0);
  console.log("balance ", balance);

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <input
        type="number"
        value={textValue}
        onChange={(e) => set_textValue(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(deposit(textValue));
          set_textValue(0);
        }}
      >
        DepositCustomAmount
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
      {"  "}
      <button
        onClick={() => {
          dispatch(withdraw(10));
        }}
      >
        {"  "}
        Withdraw 10$
      </button>
      {"  "}
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </div>
  );
}
export default App;
