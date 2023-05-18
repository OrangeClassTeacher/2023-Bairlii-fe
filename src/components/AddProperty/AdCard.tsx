import React from "react";
import Link from "next/link";
import SwiperSlider from "../SwiperForCard";

const AdCard = ({ item, key }: any) => {
  const date1 = new Date(item?.createdAt).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div
      className="flex flex-wrap flex-col max-w-[10px] min-w-[300px]"
      key={key}
    >
      <SwiperSlider data={item} />
      <div className="z-20">
        <div className="flip">
          <div className="content">
            <div className="front">
              <p className="flex justify-between w-2xl text-gray-900  leading-8  ">
                <p className="text-gray-900 font-bold text-xl">Area:</p>
                {item?.propertyID?.area}.m.k
              </p>
              <p className="flex justify-between w-2xl text-gray-900  leading-8">
                <p className="text-gray-900 font-bold text-xl">Room Count: </p>
                {item?.propertyID?.roomCount}
              </p>
              <p className="flex justify-between w-2xl text-gray-900  leading-8">
                <p className="text-gray-900 font-bold text-xl">Location:</p>
                {item?.propertyID?.locationName}
              </p>
            </div>
            <div className="back">
              <p className="flex justify-between w-2xl text-gray-900  leading-8">
                <p className="text-gray-900 font-bold text-xl">Price:</p>{" "}
                {item.price}
              </p>
              <p className="flex justify-between w-2xl text-gray-900  leading-8">
                <p className="text-gray-900 font-bold text-xl">Form:</p>{" "}
                {date1}
              </p>
              <p className="flex justify-between w-2xl  text-yellow-900 underline leading-8 ms-40 mt-3">
                <Link
                  href={{
                    pathname: `/[detail]`,
                    query: {
                      detail: item._id,
                    },
                  }}
                >
                  See more...
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
