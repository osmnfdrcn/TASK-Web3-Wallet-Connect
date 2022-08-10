import { WalletLinkConnector } from "@web3-react/walletlink-connector";

export const Coinbase = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.REACT_APP_COINBASE_INFURA_ID}`,
  appName: "Web3-react Demo",
  supportedChainIds: [1, 3, 4, 5, 42]
});