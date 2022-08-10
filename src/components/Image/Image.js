const Image = (props) => {
  const { connector, setConnector, image, alt } = props
  return (
    <div className="image-container" onClick={() => {
      setConnector(connector)
    }}>
      <img src={image} alt={alt} />
    </div>
  )
}

export default Image