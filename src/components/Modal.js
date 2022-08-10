import { Coinbase, metaMaskConnector, WalletConnect } from '../connectors'
import { metaMaskImage, coinBaseImage, walletConnectImage } from '../assets/images'

const Modal = ({ setConnector }) => {
  return (
    <section className="modal-container">
      <div className="image-container" onClick={() => {
        setConnector(metaMaskConnector)
      }}>
        <img src={metaMaskImage} alt="MetaMask" />
      </div>
      <div className="image-container" onClick={() => setConnector(Coinbase)}>
        <img src={coinBaseImage} alt="Coin Base" />
      </div>
      <div className="image-container" onClick={() => setConnector(WalletConnect)}>
        <img src={walletConnectImage} alt="Wallet Connect" />
      </div>
    </section>
  )
}

export default Modal