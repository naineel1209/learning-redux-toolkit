import {incrementBonus} from "../actions/index.js";
import {useSelector, useDispatch } from "react-redux";

function Bonus({store}) {
  const points = useSelector(state => state.bonus.points);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementBonus());
  };
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${points}</h3>

        <button onClick={increment}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;
