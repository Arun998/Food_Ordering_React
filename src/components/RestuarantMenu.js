import { useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestuarantCategory from "./RestuarantCategory";



const RestuarantMenu = () => {
  const { resId } = useParams();
  const menuList = useRestuarantMenu(resId);
  const [showIndex,setShowIndex]=useState(null)
  if (menuList.length === 0) {
    return <ShimmerUi />;
  }
  const { name, costForTwoMessage, cuisines, avgRating } =
    menuList.cards[0].card.card.info;
  //  const {itemCards}=menuList.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  const itemCaregory =
    menuList.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div>
      <div className="res-menu">
        <div className="res-header m-2">
          <h1 className="font-bold text-center p-3">{name}</h1>
          <p className="text-center font-bold">
            {cuisines.slice(0, 3).join(",")}
          </p>
          <p className="text-center py-2">{costForTwoMessage}</p>
          <p className="text-center py-2" aria-hidden="true">
            ⭐ {avgRating}
          </p>
        </div>
      </div>
      {itemCaregory.map((category,index) => {
        return <RestuarantCategory key={category.card.card.title} data={category.card?.card} showItem={index===showIndex?true:false} setItem={()=>setShowIndex(index)}/>;
      })}
    </div>
  );
};
export default RestuarantMenu;
