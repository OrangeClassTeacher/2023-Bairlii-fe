import React from "react";
import Properties from "./propertyData";
import Slider from "../adDetailComp/Slider";
import Link from "next/link";
import SwiperSlider from "../SwiperForCard";

const AdCard = ({ item, key }: any) => {
  const date = new Date(item.createdAt);

  return (
    <div
      className="flex flex-wrap flex-col max-w-[10px] min-w-[300px]"
      key={key}
    >
      {/* <Slider images={item.propertyID.photos} className="" /> */}
      <SwiperSlider data={item} />
      <div></div>

      <div className="rounded-2xl bg-slate-300/90 flex flex-col w-[85%] p-6 -mt-2 ml-2 z-20">
        <span className="flex">
          Area:
          <div className="flex self-end">{item.propertyID.area}.m.k</div>
        </span>
        <span>Room Number: {item.propertyID.roomNumber}</span>
        <span>Location:{item.propertyID.locationName}</span>
        <span>Price: {item.price}</span>
        <span>
          From: {date.getFullYear()} {date.getMonth() + 1} {date.getDate()}
        </span>
        <Link
          href={{
            pathname: `/[detail]`,
            query: {
              detail: item._id,
            },
          }}
        >
          See More ...
        </Link>
      </div>
    </div>
  );
};

export default AdCard;
