import React, { useState } from "react";
import { TbMapPin } from "react-icons/tb";
import { FaVectorSquare } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";
import { TfiGallery, TfiMapAlt, TfiClose } from "react-icons/tfi"
import { GoogleMapComp } from "./GoogleMap";

export const Description = ({ data }: any) => {
  const date = new Date(data?.createdAt)
  const [mapModal, setMapModal] = useState(false)

  function modalHandler() {
    setMapModal(!mapModal)
  }

  return (
    <div>
      <div className={`flex fixed top-0 w-full h-full bg-gray-900 p-6 text-white text-xl ${mapModal ? "block" : "hidden"}`}>
        <TfiClose className="fixed right-20 top-20 text-3xl z-10 drop-shadow-xl font-black" onClick={() => modalHandler()} />
        <div className="pr-6">
          <button className="flex flex-col justify-center items-center w-20 h-20  mb-2.5">
            <TfiGallery />
            PHOTOS
          </button>
          <button className="flex flex-col justify-center items-center w-20 h-20">
            <TfiMapAlt />
            MAP
          </button>
        </div>
        <div className="w-full ">
          <GoogleMapComp data={data} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="font-semibold text-2xl items-center">
            {data?.propertyID?.locationName}
          </div>
          <div className="flex items-center w-20 bg-slate-200 rounded-lg justify-center text-[#00af9e]" onClick={() => modalHandler()}>
            <TbMapPin />
            Map
          </div>
        </div>
        <div className="flex items-center">
          <span className=" font-semibold text-2xl text-emerald-600 items-center">₮{data?.price}</span>
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
        <span>From: {date.getFullYear()} {date.getMonth() + 1} {date.getDate()}</span>
      </div>
    </div>
  );
};
