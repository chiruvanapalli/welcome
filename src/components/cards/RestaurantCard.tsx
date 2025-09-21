import React from "react";
import { RestaturantTypes } from "../../types/types";

const RestaurantCard = ({
  name,
  image,
  cuisine,
  rating,
  price,
}: RestaturantTypes) => {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} className="restaurant-card__image" />
      <div className="restaurant-card__content">
        <h3 className="restaurant-card__name">{name}</h3>
        <p className="restaurant-card__cuisine">{cuisine}</p>
        <div className="restaurant-card__info">
          <span className="restaurant-card__rating">⭐ {rating}</span>
          <span className="restaurant-card__price">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
