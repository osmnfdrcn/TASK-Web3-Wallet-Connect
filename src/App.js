import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import Home from './pages/Home/Home';

const getLibrary = (provider) => {
  const library = new Web3(provider)
  library.pollingInterval = 12000
  return library
};

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className='App'>
        <Home />
      </div>
    </Web3ReactProvider>
  );
};

export default App;
