import "./InfoCard.css";

const InfoCard = ({ hobbyOne, hobbyTwo, hobbyThree, imageSrc }) => {
  return (
    <div className="info-card">
      {imageSrc && (
        <img className="info-card__image" src={imageSrc} alt="Hobby billede" />
      )}
      <ul className="info-card__list">
        <li>{hobbyOne}</li>
        <li>{hobbyTwo}</li>
        <li>{hobbyThree}</li>
      </ul>
    </div>
  );
};

export default InfoCard;
