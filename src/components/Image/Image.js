import './Image.css'
import { useAppContext } from '../../context/appContext';

const Image = (props) => {
  const { setConnector } = useAppContext();
  const { connector, image, alt } = props
  return (
    <div className="image-container" onClick={() => { setConnector(connector) }}>
      <img src={image} alt={alt} />
    </div>
  )
}

export default Image