import React from "react";
import Link from "next/link";
import SwiperSlider from "../SwiperForCard";

const AdCardForUser = ({ item, key, deleteAdvertisement }: any) => {
  const date = new Date(item?.createdAt);

  return (
    <div
      className="flex flex-wrap flex-col max-w-[10px] min-w-[300px]"
      key={key}
    >
      <SwiperSlider data={item} />
      <div></div>

      <div className="rounded-2xl bg-slate-300/90 flex flex-col w-[85%] p-6 -mt-2 ml-2 z-20">
        <span className="flex">
          Area:
          <div className="flex self-end">{item?.propertyID?.area}.m.k</div>
        </span>
        <span>Room Number: {item?.propertyID?.roomNumber}</span>
        <span>Location:{item?.propertyID?.locationName}</span>
        <span>Price: {item?.price}</span>
        <span>
          From: {date.getFullYear()} {date.getMonth() + 1} {date.getDate()}
        </span>
        <Link
          href={{
            pathname: `/[detail]`,
            query: {
              detail: item?._id,
            },
          }}
        >
          See More ...
        </Link>
        <button onClick={() => deleteAdvertisement(item?._id)} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
      </div>
    </div>
  );
};

export default AdCardForUser;
