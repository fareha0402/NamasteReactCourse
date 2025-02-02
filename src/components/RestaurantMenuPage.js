import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenuPage = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); /// Custom hook where fetch data logic is abstracted
  const [showIndex,setShowIndex] = useState(0)
  // Reusable code
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, id } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      .card;
  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) => {
        return (
          c.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="text-orange-400 font-bold">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2 className="my-6 font-semibold text-slate-400">Menu</h2>
      {categories.map((category,index) => (
        <RestaurantCategory key={category.card.card.title} data={category?.card.card} showList={ index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)} />
      ))}
    </div>
  );
};
export default RestaurantMenuPage;
