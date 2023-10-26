import React from "react";
import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  const avgRating = parseFloat(avgRatingString); // Convert to number if needed

  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name + " Image"} />
      <h3>{name}</h3>
      
      <h5>{areaName}</h5>
      <span>
        <h4
          style={
            avgRating < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRating === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
