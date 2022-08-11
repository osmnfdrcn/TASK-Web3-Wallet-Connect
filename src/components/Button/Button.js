import './Button.css'
import { useAppContext } from '../../context/appContext';

const Button = () => {
  const { showModal, active, disconnect } = useAppContext();
  return (
    <button onClick={(e) => {
      e.stopPropagation()
      active
        ? disconnect()
        : showModal()
    }}>
      {active ? 'DISCONNECT' : 'CONNECT'}
    </button>
  )
}

export default Button