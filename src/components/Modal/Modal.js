import { Coinbase, metaMaskConnector, WalletConnect } from '../../connectors'
import { metaMaskImage, coinBaseImage, walletConnectImage } from '../../assets/images'
import Image from '../Image/Image'
import './Modal.css'

const Modal = () => {

  return (
    <section className="modal-container">
      <Image connector={metaMaskConnector} image={metaMaskImage} alt={"MetaMask"} />
      <Image connector={Coinbase} image={coinBaseImage} alt={"Coin Base"} />
      <Image connector={WalletConnect} image={walletConnectImage} alt={"Wallet Connect"} />
    </section>
  )
}

export default Modal