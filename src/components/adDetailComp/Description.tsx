import React from "react";
import { TbMapPin } from "react-icons/tb";
import { FaVectorSquare } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";

export const Description = ({ data }: any) => {
  console.log(data);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="font-semibold text-2xl items-center">
            {data?.propertyID?.locationName}
          </div>
          <div className="flex items-center w-20 bg-slate-200 rounded-lg justify-center text-[#00af9e]">
            <TbMapPin />
            Map
          </div>
        </div>
        <div>
          <span className="text-emerald-600 items-center">₮{data?.price}</span>
          /per month
        </div>
        <div className="flex items-center">
          <FaVectorSquare className="text-emerald-600" />
          <span className="text-emerald-600 items-center">
            {data?.propertyID?.area}
          </span>
          m²
        </div>
        <div className="flex items-center ">
          <MdOutlineBedroomParent className="text-emerald-600" />
          <span className="text-emerald-600 items-center">
            {data?.propertyID?.roomNumber}
          </span>
          rooms
        </div>
      </div>
    </div>
  );
};
