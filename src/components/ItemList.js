import React from "react";
import { IMAGE_URL } from "../utils/image";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((list) => {
        const { id, name, price, defaultPrice, description, imageId } =
          list.card.info;
        return (
          <div
            key={id}
            className="flex justify-between border-gray-400 border-b-2 shadow-sm"
          >
            <div className="m-1 px-3">
              <h1 className="font-medium py-2">{name}</h1>
              <p className="py-2">{price / 100 || defaultPrice / 100} ₹</p>
              <p className="w-[570px]">{description}</p>
            </div>

            <div className="item-img relative" key={id}>
              <img
                className="w-[130px] py-3 rounded-3xl "
                src={`${IMAGE_URL}${imageId}`}
                alt="card-image"
              />
              <button className="absolute p-1 border-2 rounded-md top-14 left-6 hover:bg-pink-200 font-bold mt-12 w-20 bg-white text-green-500  font-mono">ADD</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
