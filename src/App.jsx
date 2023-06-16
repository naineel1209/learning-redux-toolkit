import './App.css';
import Account from './components/Account.jsx';
import Bonus from './components/Bonus.jsx';
import {useSelector} from "react-redux";

function App() {
    const amount = useSelector(state => state.account.amount);
    const points = useSelector(state => state.bonus.points);

    const account = useSelector(state => state.account);

    if(account.pending) return (<div className="App"> <h3>Loading...</h3> </div>);

    if(account.error) return (<div className="App"> <h3>Error: {account.error}</h3> </div>);


    return (<div className="App">
            <h4>App</h4>
            
            <h3>Account No: </h3>
            <h3>Current Amount : {amount}</h3>
            <h3>Total Bonus : {points}</h3>

            <Account></Account>
            <Bonus ></Bonus>
        </div>);
}

export default App;
