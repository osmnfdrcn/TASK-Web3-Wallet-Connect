import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from "react";
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal'
import Title from '../components/Title/Title';
import Text from '../components/Text/Text';

// MetaMask ve Coinbase, her ikisi de “injected” ethereum providerlari kullandigindan, ikisinin ayni browserda kurulu olmasi durumunda, hangisi secilirse secilsin ayni address'i gosteriyor.

export const Home = ({ className }) => {
  const [connector, setConnector] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const { active, account, activate, deactivate } = useWeb3React();
  /*
      active: (BOOL) is a wallet actively connected right now.
      account: (address) the blockchain address that is connected.
      activate: (wallet) the method to connect to a wallet
      deactivate: () the method to disconnect from a wallet
  */

  const connect = async (connector) => {
    try {
      await activate(connector);
    } catch (error) {
      console.log(error);
    }
  };

  const disconnect = () => {
    try {
      deactivate();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    connect(connector)
    setShowModal(false)
    // eslint-disable-next-line
  }, [connector])

  return (
    <div className="container">

      {showModal &&
        <Modal
          setConnector={setConnector}
        />}

      <div className="info-area">
        <Title text={"Connect Your Wallet"} />
        <Button active={active} disconnect={disconnect} setShowModal={setShowModal} />
        <Text text={active ? 'connected' : 'not connected'} />
        <Text text={account} />
      </div>

    </div>
  );
};



export default Home;