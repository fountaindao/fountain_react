import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Flow into the Fountain rejuvenation experience
        </p>
        <a
          className="App-link"
          href="http://lq.systems"
          target="_blank"
          rel="noopener noreferrer"
        >
          How do we reverse the entropy of the universe?
        </a>
        <iframe src='https://opensea.io/collection/fountain-clinic?embed=true'
        width='100%'
        height='100%'
        frameborder='0'
        allowfullscreen></iframe>
      </header>
    </div>
  );
}

export default App;
