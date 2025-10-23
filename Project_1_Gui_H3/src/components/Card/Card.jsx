import "./Card.css";

const Card = ({ title, image, price, description, buttonText }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <h2 className="card__title">{title}</h2>
      <p className="card__price">{price}</p>
      <p className="card__description">{description}</p>
      <button className="card__button">{buttonText}</button>
    </div>
  );
};

export default Card;
