
import { ITEM_IMG_CDN_URL } from "../constant";

const FoodItem = ({
    name,
    cloudinaryImageId,
    price,
  }) => {
    return (
      <div className="menu-item">
      <img src={`${ITEM_IMG_CDN_URL}/${cloudinaryImageId}`} />

        <h2>{name}</h2>
        
        <h4>Rupees: {price / 100}</h4>
      </div>
    );
  };

export default FoodItem;