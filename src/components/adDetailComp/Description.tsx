import React, { useState } from "react";
import { TbMapPin } from "react-icons/tb";
import { FaVectorSquare } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdOutlineBedroomParent, MdPanoramaPhotosphere } from "react-icons/md";
import { TfiGallery, TfiMapAlt } from "react-icons/tfi";
import { GoogleMapComp } from "./GoogleMap";
import PanoramaViewer from "./Panaroma";
import SwiperForModal from "./SwiperForModal";

export const Description = ({ data }: any): JSX.Element => {
  const date1 = new Date(data?.createdAt).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const [mapModal, setMapModal] = useState(false);
  const [modalSelected, setModalSelected] = useState("");
  const selectedStyle = "text-emerald-600 border-emerald-600";
  // const { price } = data;

  function modalHandler(): void {
    setMapModal(!mapModal);
    setModalSelected("MAP");
  }

  const modalCSS1 =
    "flex fixed top-0 w-full h-full bg-gray-900 p-6 text-white text-xl z-10 inset-0 ";

  return (
    <div className="flex flex-col justify-between ">
      <div className={`${modalCSS1} ${mapModal ? "block" : "hidden"}`}>
        <ImCross
          className="fixed right-20 top-20 text-3xl z-10 drop-shadow-xl font-black"
          onClick={(): void => modalHandler()}
        />
        <div className="pr-6">
          <button
            className={`flex flex-col justify-center items-center w-24 h-20 border-2 border-white mb-2.5 p-1 rounded-lg ${
              modalSelected == "PHOTOS" ? selectedStyle : ""
            }`}
            onClick={(): void => setModalSelected("PHOTOS")}
          >
            <TfiGallery />
            PHOTOS
          </button>
          <button
            className={`flex flex-col justify-center items-center w-24 h-20 border-2 border-white mb-2.5 p-1 rounded-lg ${
              modalSelected == "MAP" ? selectedStyle : ""
            }`}
            onClick={(): void => setModalSelected("MAP")}
          >
            <TfiMapAlt />
            MAP
          </button>
          <button
            className={`flex flex-col justify-center items-center w-24 h-20 border-2 border-white mb-2.5 p-1 rounded-lg ${
              modalSelected == "PANO" ? selectedStyle : ""
            }`}
            onClick={(): void => setModalSelected("PANO")}
          >
            <MdPanoramaPhotosphere />
            360°
          </button>
        </div>
        <div className="w-full ">
          {modalSelected == "PHOTOS" ? (
            <SwiperForModal data={data} />
          ) : modalSelected == "MAP" ? (
            <GoogleMapComp data={data} />
          ) : modalSelected == "PANO" ? (
            <PanoramaViewer />
          ) : (
            "Error Not Found 404"
          )}
        </div>
      </div>
      <div className="shadow-lg bg-white rounded-lg border p-4 mx-auto  w-[500px]">
        <div className="flex flex-wrap justify-center">
          <div className="flex  justify-between  w-[400px] ">
            <div className="font-bold text-2xl items-center">
              <p className="text-3xl">{data?.propertyID?.locationName}</p>
            </div>
            <button
              className="flex items-center ps-3 pe-3 bg-slate-200 rounded-lg justify-center text-[#00af9e]"
              onClick={(): void => modalHandler()}
            >
              <TbMapPin className="text-xl " />
              Map
            </button>
          </div>
          <div className="flex items-center w-[400px] mt-4">
            <span className="  text-3xl text-emerald-600 items-center">
              ${data?.price}
            </span>
            <p className="text-xl">/per month</p>
          </div>
          <div className="flex items-center w-[400px] mt-4">
            <FaVectorSquare className="text-emerald-600 text-3xl" />
            <span className="text-emerald-600 items-center text-xl">
              {data?.propertyID?.area}
            </span>
            <p className="text-xl">.m²</p>
          </div>
          <div className="flex items-center w-[400px] mt-4">
            <MdOutlineBedroomParent className="text-emerald-600 text-3xl" />
            <span className="text-emerald-600 items-center text-xl">
              {data?.propertyID?.roomCount}
            </span>
            <p className="text-xl">.rooms</p>
          </div>
          <div className="flex items-center w-[400px] mt-4">
            <span className="text-xl">From: {date1}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
