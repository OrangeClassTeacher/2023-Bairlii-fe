import React from "react";
import Link from "next/link";
import SwiperSlider from "../SwiperForCard";

const AdCardForUser = ({
  item,
  key,
  deleteAdvertisement,
}: any): JSX.Element => {
  const date = new Date(item?.createdAt);

  return (
    <div className="card h-[500px] ">
      <div className="card-inner justify-center h-[500px]">
        <div
          className="  flex flex-wrap flex-col max-w-[10px] min-w-[300px]  "
          key={key}
        >
          <SwiperSlider data={item} />
          <div className=" bg-gray-100  z-20 flex flex-wrap justify-center h-[310px]  ">
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
              <p>{item?.price}$</p>
            </div>
            <div className="flex justify-between w-4/5 mt-2">
              <p className="font-bold"> From:</p>{" "}
              <p>
                {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}
              </p>
            </div>
            <div className="w-4/5 mt-4 flex flex-row-reverse text-cyan-600 text-sm underline">
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
                className="properties-button properties-button-delete rounded-md ps-3 pe-3 pt-2 pb-2  mt-3 mb-3"
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
