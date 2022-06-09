import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido!
        </p>
        <a
          className="App-link"
          href="https://github.com/ErianPerez"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pasate por mi Github!
        </a>
      </header>
    </div>
  );
}

export default App;
