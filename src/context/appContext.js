import React, { useContext, useReducer } from 'react'
import { useWeb3React } from '@web3-react/core';
import reducer from './reducers'

import {
  SHOW_MODAL,
  HIDE_MODAL,
  SET_CONNECTOR
} from './actions'

const initialState = {
  displayModal: false,
  connector: null

}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { active, account, activate, deactivate } = useWeb3React();
  /*
    active: (BOOL) is a wallet actively connected right now.
    account: (address) the blockchain address that is connected.
    activate: (wallet) the method to connect to a wallet
    deactivate: () the method to disconnect from a wallet
*/

  const showModal = () => {
    dispatch({
      type: SHOW_MODAL,
    })
  }
  const hideModal = () => {
    dispatch({
      type: HIDE_MODAL,
    })
  }
  const setConnector = (connector) => {
    dispatch({
      type: SET_CONNECTOR,
      payload: {
        connector
      }
    })
    hideModal()
  }

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

  return <AppContext.Provider value={{ ...state, showModal, hideModal, setConnector, active, account, activate, deactivate, connect, disconnect }} >
    {children}
  </AppContext.Provider>
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }