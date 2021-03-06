import logo from './f_logo.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <nft-card contractAddress="0x495f947276749ce646f68ac8c248420045cb7b5e" 
      tokenId="109525556422896821561320495960339239752497424726757471416685648929016457986049"> 
      </nft-card>
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

      </header>
    </div>
  );
}

export default App;
