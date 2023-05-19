import React from "react";
import Link from "next/link";
import SwiperSlider from "../SwiperForCard";

const AdCardForUser = ({ item, key, deleteAdvertisement }: any): JSX.Element => {
  const date = new Date(item?.createdAt);

  return (
    <div className="card">
      <div className="card-inner ">
        <div
          className="  flex flex-wrap flex-col max-w-[10px] min-w-[300px] "
          key={key}
        >
          <SwiperSlider data={item} />
          <div className=" bg-gray-100  z-20 flex flex-wrap justify-center ">
            <div className="flex justify-between w-4/5 mt-2  ">
              <p className="font-bold">Area:</p>
              <p>{item?.propertyID?.area}.m.k</p>
            </div>
            <div className="flex justify-between w-4/5 mt-2 ">
              <p className="font-bold">Room Number:</p>
              <p>{item?.propertyID?.roomNumber}</p>
            </div>
            <div className="flex justify-between w-4/5 mt-2 ">
              <p className="font-bold">Location:</p>
              <p>{item?.propertyID?.locationName}</p>
            </div>
            <div className="flex justify-between w-4/5 mt-2 ">
              <p className="font-bold">Price:</p>
              <p>{item?.price}</p>
            </div>
            <div className="flex justify-between w-4/5 mt-2">
              <p className="font-bold"> From:</p>{" "}
              <p>
                {date.getFullYear()} {date.getMonth() + 1} {date.getDate()}
              </p>
            </div>
            <div className="w-4/5 mt-4 flex flex-row-reverse text-gray-600 text-sm">
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
            </div>
            <div>
              <button
                onClick={(): void => deleteAdvertisement(item?._id)}
                type="button"
                className="mt-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCardForUser;
