import React, { useState } from "react";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";
import Image from "next/image";

export const AdDetailSmallSlider = ({ images }: any): JSX.Element => {
  const [imageIndex, setImageIndex] = useState(0);

  function increaseImageIndex(): void {
    if (imageIndex == images?.propertyID?.photos.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  function decreaseImageIndex(): void {
    if (imageIndex == 0) {
      setImageIndex(images?.propertyID?.photos.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  return (
    <div className="flex flex-col gap-y-5">
      <div className="w-full relative h-[600px] ">
        <Image
          height={100}
          width={100}
          src={images?.propertyID?.photos[imageIndex]}
          alt="picture"
          className="object-fill w-full h-full rounded-2xl"
        />
        <TiArrowLeftOutline
          className="absolute left-px top-1/2 text-4xl cursor-pointer"
          onClick={(): void => increaseImageIndex()}
        />
        <TiArrowRightOutline
          className="absolute right-px top-1/2 text-4xl cursor-pointer"
          onClick={(): void => decreaseImageIndex()}
        />
      </div>
      <div className="flex h-40  rounded-2xl overflow-hidden">
        <Image
          height={100}
          width={100}
          src={images?.propertyID?.photos[0]}
          alt="picture"
          className="w-[20%]"
        />
        <Image
          height={100}
          width={100}
          src={images?.propertyID?.photos[1]}
          alt="picture"
          className="w-[20%]"
        />
        <Image
          height={100}
          width={100}
          src={images?.propertyID?.photos[2]}
          alt="picture"
          className="w-[20%]"
        />
        <Image
          height={1000}
          width={1000}
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
