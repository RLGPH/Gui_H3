import React from "react";
import "./ProductCard.css";

const ProductCard = ({ title, price, description, image }) => {
  return (
    <div>
      <img src={image} alt={title} width={200} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Pris: {price} kr</p>
    </div>
  );
};

export default ProductCard;
