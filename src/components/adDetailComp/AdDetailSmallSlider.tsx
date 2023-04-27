import React, { useState } from "react";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";

export const AdDetailSmallSlider = ({ images }: any) => {
  let [imageIndex, setImageIndex] = useState(0);

  function increaseImageIndex() {
    if (imageIndex == images?.propertyID?.photos.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  function decreaseImageIndex() {
    if (imageIndex == 0) {
      setImageIndex(images?.propertyID?.photos.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  return (
    <div className="flex flex-col gap-y-5">
      <div className="w-full relative h-[600px] ">
        <img
          src={images?.propertyID?.photos[imageIndex]}
          alt="picture"
          className="object-fill w-full h-full rounded-2xl"
        />
        <TiArrowLeftOutline
          className="absolute left-px top-1/2 text-4xl cursor-pointer"
          onClick={() => increaseImageIndex()}
        />
        <TiArrowRightOutline
          className="absolute right-px top-1/2 text-4xl cursor-pointer"
          onClick={() => decreaseImageIndex()}
        />
      </div>
      <div className="flex h-40  rounded-2xl overflow-hidden">
        <img
          src={images?.propertyID?.photos[0]}
          alt="picture"
          className="w-[20%]"
        />
        <img
          src={images?.propertyID?.photos[1]}
          alt="picture"
          className="w-[20%]"
        />
        <img
          src={images?.propertyID?.photos[2]}
          alt="picture"
          className="w-[20%]"
        />
        <img
          src={images?.propertyID?.photos[3]}
          alt="picture"
          className="w-[20%]"
        />
        <div className="w-[20%] h-[100%] bg-slate-400 flex justify-center items-center">
          {images?.propertyID?.photos.length - 4} more pictures
        </div>
      </div>
    </div>
  );
};
