import logo from './logo.svg';
import './App.css';

import GreetCustom from './components/7_destructuring_props_state_functional'
function App() {
  return (
    <div className="App">
    <GreetCustom name="Mr. Stark" heroname="Iron Man"/>
    </div>
  );
}

export default App;
