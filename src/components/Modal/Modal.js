import { Coinbase, metaMaskConnector, WalletConnect } from '../../connectors'
import { metaMaskImage, coinBaseImage, walletConnectImage } from '../../assets/images'
import Image from '../Image/Image'

const Modal = ({ setConnector }) => {
  return (
    <section className="modal-container">
      <Image setConnector={setConnector} connector={metaMaskConnector} image={metaMaskImage} alt={"MetaMask"} />
      <Image setConnector={setConnector} connector={Coinbase} image={coinBaseImage} alt={"Coin Base"} />
      <Image setConnector={setConnector} connector={WalletConnect} image={walletConnectImage} alt={"Wallet Connect"} />
    </section>
  )
}

export default Modal