import React from "react";
import Link from "next/link";
import SwiperSlider from "../SwiperForCard";

const AdCard = ({ item, key }: any) => {
  const date = new Date(item?.createdAt);

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
                {item?.propertyID?.roomNumber}
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
                {date.getFullYear()} {date.getMonth() + 1} {date.getDate()}
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
