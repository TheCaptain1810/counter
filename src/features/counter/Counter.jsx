import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmout, reset } from "./counterSlice";
import { useState } from "react";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState();

  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  };

  return (
    <div className="flex flex-col items-center m-5">
      <span className="text-5xl m-5">{count}</span>
      <div>
        <button
          aria-label='Decrement Value'
          onClick={() => dispatch(decrement())}>Decrement</button>
        <button
          aria-label='Increment Value'
          onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <div>
        <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Set Amount..." />
        <button
          aria-label='Increment Value By Amount'
          onClick={() => dispatch(incrementByAmout(Number(amount) || 0))}>Increment By Amount</button>
      </div>
      <button aria-label='Reset' onClick={resetAll}>Reset</button>
    </div>
  );
}
