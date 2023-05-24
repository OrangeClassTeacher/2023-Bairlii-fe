import React from "react";
import Link from "next/link";
import SwiperSlider from "../SwiperForCard";

const AdCard = ({ item, key }: any): JSX.Element => {
  const date1 = new Date(item?.createdAt).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="z-20">
      <div className="cardd">
        <div className="card-inner">
          <div
            className="flex  flex-wrap flex-col max-w-[10px] min-w-[300px] "
            key={key}
          >
            <SwiperSlider data={item} />
            <div className="z-20 bg-gray-200   flex flex-wrap justify-center h-[250px] scroll">
              <div className="w-[270px] ">
                <p className="flex justify-between w-2xl text-gray-900  leading-8">
                  <p className="text-gray-900 font-bold text-md">
                    Guest Count:{" "}
                  </p>
                  {item?.propertyID?.guestCount}
                </p>
                <p className="flex justify-between w-2xl text-gray-900  leading-8">
                  <p className="text-gray-900 font-bold text-md">
                    Room Count:{" "}
                  </p>
                  {item?.propertyID?.roomCount}
                </p>
                <p className="flex justify-between w-2xl text-gray-900  leading-8">
                  <p className="text-gray-900 font-bold text-md">
                    Bathroom Count:{" "}
                  </p>
                  {item?.propertyID?.bathroomCount}
                </p>
                <p className=" justify-between w-2xl text-gray-900  leading-8">
                  <p className="text-gray-900 font-bold text-md ">
                    Description:
                  </p>
                  <p className="ms-2">{item?.propertyID?.description}</p>
                </p>
                <p className="flex justify-between w-2xl text-gray-900  leading-8">
                  <p className="text-gray-900 font-bold text-md">Location:</p>
                  {item?.propertyID?.locationName}
                </p>
                <p className="flex justify-between w-2xl text-gray-900  leading-8">
                  <p className="text-gray-900 font-bold text-md">Form:</p>{" "}
                  {date1}
                </p>

                <p className="flex justify-between w-2xl  text-gray-500 underline leading-8 ms-40 mt-3  ps-6">
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
    </div>
  );
};

export default AdCard;
