import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ id, title, price, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <p className="card__price">Pris: {price} kr</p>
      <Link to={`/ProductPage/${id}`}>Læs Mere</Link>
    </div>
  );
};

export default ProductCard;
