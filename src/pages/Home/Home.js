import './Home.css'
import { useEffect } from "react";
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal'
import Title from '../../components/Title/Title';
import Text from '../../components/Text/Text';
import { useAppContext } from '../../context/appContext';


// ISSUE
// in case of metamask abd coinbase are installed on same browser, regardless of which one's chosen, same address's shown.
// probably because of both are "injected",
export const Home = ({ className }) => {

  const {
    connector,
    displayModal,
    active,
    account,
    connect,
  } = useAppContext();

  useEffect(() => {
    connect(connector)
    // eslint-disable-next-line
  }, [connector])

  return (
    <div className="container">

      {displayModal && <Modal />}

      <div className="info-area">
        <Title text={"Connect Your Wallet"} />
        <Button />
        <Text text={active ? 'connected' : 'not connected'} />
        <Text text={account} />
      </div>

    </div>
  );
};



export default Home;