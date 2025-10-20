const InfoCard = ({ hobbyOne, hobbyTwo, hobbyThree, imageSrc }) => {
  return (
    <div className="info-card">
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Hobby billede"
          style={{ width: '150px', borderRadius: '8px' }}
        />
      )}
      <ul>
        <li>{hobbyOne}</li>
        <li>{hobbyTwo}</li>
        <li>{hobbyThree}</li>
      </ul>
    </div>
  )
}

export default InfoCard
