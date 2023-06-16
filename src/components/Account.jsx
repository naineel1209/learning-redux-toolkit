import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, incrementByAmount, getUserAccount} from '../actions/index.js';
  
function Account() {
  // const [account, setAccount] = useState({ amount: 0 });
  const [value, setValue] = useState(0);

  const amount = useSelector(state => state.account.amount);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement())
  };

  const incrementByAmtHandler = (value) => {
    dispatch(incrementByAmount(value))
  };

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Account Component</b>
        </h4>
        <h3>Amount:${amount}</h3>
        <button onClick={incrementHandler}>Increment +</button>
        <button onClick={decrementHandler}>Decrement -</button>
        <input type="number" onChange={(e) => setValue(+e.target.value)} min={1}></input>
        <button onClick={() => incrementByAmtHandler(value)}>
          Increment By {value} +
        </button>
        <button onClick={() => dispatch(getUserAccount(value))}>
          Initialize Account {value}
        </button>
      </div>
    </div>
  );
}

export default Account;
