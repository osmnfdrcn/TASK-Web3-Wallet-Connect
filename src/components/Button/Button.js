import React from 'react'

const Button = ({ active, disconnect, setShowModal }) => {
  return (
    <button onClick={() => {
      active
        ? disconnect()
        : setShowModal(true)
    }}>
      {active ? 'DISCONNECT' : 'CONNECT'}
    </button>
  )
}

export default Button