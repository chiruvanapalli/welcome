import React from "react";
import { RestaturantTypes } from "../../types/types";
import "./RestaurantCard.scss";
import { CMD_URL } from "../../utils";

const RestaurantCard = ({
  name,
  image,
  cuisine,
  rating,
  price,
}: RestaturantTypes) => {
  return (
    <div className="restaurant-card">
      <img
        src={CMD_URL + image}
        alt={name}
        className="restaurant-card__image"
      />
      <div className="restaurant-card__content">
        <h3 className="restaurant-card__name">{name}</h3>
        <p className="restaurant-card__cuisine">{cuisine}</p>
        <div className="restaurant-card__info">
          <span className="restaurant-card__rating">⭐ {rating}</span>
          <span className="restaurant-card__price">{price}</span>
        </div>
        <button className="restaurant-card__btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
