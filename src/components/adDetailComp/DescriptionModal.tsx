import React from 'react'
import { ImCross } from "react-icons/im";
import { TfiGallery, TfiMapAlt } from "react-icons/tfi";
import { MdPanoramaPhotosphere } from "react-icons/md";
import { GoogleMapComp } from "./GoogleMap";
import { AdDetailSmallSlider } from "./AdDetailSmallSlider";
import PanoramaViewer from "./Panaroma";

const DescriptionModal = ({ data, modalHandler, setModalSelected, modalSelected, mapModal }: any) => {
    const selectedStyle = "text-emerald-600 border-emerald-600";

    return (
        <div
            className={`flex fixed top-0 rigt-0 w-full h-full bg-gray-900 p-6 text-white text-xl z-10 ${mapModal ? "block" : "hidden"
                }`}
        >
            <ImCross
                className="fixed right-20 top-20 text-3xl z-10 drop-shadow-xl font-black"
                onClick={() => modalHandler()}
            />
            <div className="pr-6">
                <button
                    className={`flex flex-col justify-center items-center w-24 h-20 border-2 border-white mb-2.5 p-1 rounded-lg ${modalSelected == "PHOTOS" ? selectedStyle : ""
                        }`}
                    onClick={() => setModalSelected("PHOTOS")}
                >
                    <TfiGallery />
                    PHOTOS
                </button>
                <button
                    className={`flex flex-col justify-center items-center w-24 h-20 border-2 border-white mb-2.5 p-1 rounded-lg ${modalSelected == "MAP" ? selectedStyle : ""
                        }`}
                    onClick={() => setModalSelected("MAP")}
                >
                    <TfiMapAlt />
                    MAP
                </button>
                <button
                    className={`flex flex-col justify-center items-center w-24 h-20 border-2 border-white mb-2.5 p-1 rounded-lg ${modalSelected == "PANO" ? selectedStyle : ""
                        }`}
                    onClick={() => setModalSelected("PANO")}
                >
                    <MdPanoramaPhotosphere />
                    360°
                </button>
            </div>
            <div className="w-full ">
                {modalSelected == "PHOTOS" ? (
                    <AdDetailSmallSlider images={data} />
                ) : modalSelected == "MAP" ? (
                    <GoogleMapComp data={data} />
                ) : modalSelected == "PANO" ? (
                    <PanoramaViewer />
                ) : (
                    "Error Not Found 404"
                )}
            </div>
        </div>
    )
}

export default DescriptionModal
