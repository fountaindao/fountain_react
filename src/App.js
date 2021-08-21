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
        <iframe src='https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/109525556422896821561320495960339239752497424726757471416685648908125737058305?embed=true'
        frameborder='0'
        scrolling="no"
        onload="resizeIframe(this)"></iframe>
        <script>  function resizeIframe(obj) {obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';}</script>
      </header>
    </div>
  );
}

export default App;
