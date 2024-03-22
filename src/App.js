import logo from './logo.svg';
import './App.css';

function App() {
  const currentDate = new Date();
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-GB', options); 
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

  return (
    <div className="App">
      <div id="clockdate">
          <div class="clockdate-wrapper">
            <h1 class="city">This is in Dhaka City </h1>
            <div id="clock"><h1>Current Date is {formattedDate}</h1></div>
            <div id="date"><h1>Current Time is {currTime}</h1></div>
          </div>
        </div>
    </div>
  );
}

export default App;
