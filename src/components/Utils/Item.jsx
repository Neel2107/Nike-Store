import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";

const Item = ({ id, color, shadow, title, text, img, btn, rating, price }) => {
  return (
    <>
      <div className={` relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center`}>
        <div className="grid items-center justify-items-center">
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">{title}</h1>
          <p className="text-slate-200 font-medium filter drop-shadow">{text}</p>
          <div className="">
            <div className=""><h1 className="">{price}</h1></div>
            <div className=""><StarIcon className="icon-style text-slate-900"/><h1 className="">{rating}</h1></div>
          </div>
          <div>
            <button type="button" className="icon-style text-slate-900"><ShoppingBagIcon/></button>
            <button type="button" className="">{btn}</button>
          </div>
        </div>
        <div className="">
            <img src={img} alt="img/item-img" className="" />
        </div>
      </div>
    </>
  );
};

export default Item;
