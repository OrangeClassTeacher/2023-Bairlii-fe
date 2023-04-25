import React, { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { IoArrowUndoOutline, IoArrowRedoOutline } from "react-icons/io5"


export const AdDetailSmallSlider = ({ images }: any) => {
  let [imageIndex, setImageIndex] = useState(0);

  function increaseImageIndex() {
    if (imageIndex == images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  function decreaseImageIndex() {
    if (imageIndex == 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  return (
    <div className="flex flex-col gap-y-5">
      <div className="w-full relative h-[600px] ">
        <img src={images[imageIndex]} alt="picture" className="object-fill w-full h-full rounded-2xl" />
        <IoArrowUndoOutline className="absolute left-px top-1/2 text-4xl cursor-pointer" onClick={() => increaseImageIndex()} />
        <IoArrowRedoOutline className="absolute right-px top-1/2 text-4xl cursor-pointer" onClick={() => decreaseImageIndex()} />
      </div>
      <div className="flex h-40  rounded-2xl overflow-hidden">
        <img src={images[0]} alt="picture" className="w-[20%]" />
        <img src={images[1]} alt="picture" className="w-[20%]" />
        <img src={images[2]} alt="picture" className="w-[20%]" />
        <img src={images[3]} alt="picture" className="w-[20%]" />
        <div className="w-[20%] h-[100%] bg-slate-400 flex justify-center items-center">{images.length - 4} more pictures</div>
      </div>
    </div >
  );
};
