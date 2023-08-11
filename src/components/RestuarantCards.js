import { IMAGE_URL } from "../utils/image";
const RestuarantCards = (props) => {
  //   console.log(props);

  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
    props.resData.info;
  const items = cuisines.slice(0, 3);

  return (
    <div className="card-link w-[303px] m-2 border-gray-300 border-2 hover:shadow-sm rounded-lg flex justify-center">
      <div className="card-container h-[483px] ">
        <div className="cards">
          <div className="w-[300px]  h-[355px]">
            <img
              className="rounded-sm "
              src={`${IMAGE_URL}${cloudinaryImageId}`}
              alt="card-image"
            />
          </div> 

          <div className="card-content flex flex-col items-center p-1">
            <h1 className="font-bold py-1">{name}</h1>
            <p className="py-1">{items.join(",")}</p>
            <p className="py-1">⭐:{avgRating}</p>
            <p className="py-1">costForTwo :{costForTwo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestuarantCards;

export const withPromotedLabel = (RestuarantCards) => {
  //higher order components
  return () => {
    return (
      <div>
        <label>promoted</label>
        <RestuarantCards />
      </div>
    );
  };
};
