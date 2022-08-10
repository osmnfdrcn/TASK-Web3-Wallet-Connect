import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const WalletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/${process.env.REACT_APP_WALLET_CONNECT_INFURA_ID}`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});