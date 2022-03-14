import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Counter />
    </div>
  );
}

export default App;
