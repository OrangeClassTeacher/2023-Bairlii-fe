import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import Image from "next/image";

const Slider = ({ images }: any) => {
  let [imageIndex, setImageIndex] = useState(0);

  function increaseImageIndex() {
    if (imageIndex == images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  return (
    <div className="relative flex align-middle h-48 w-full">
      <div className="sliderImgContainer z-10 w-full h-full">
        <Image
          src={images[imageIndex]}
          alt=""
          className="object-fill w-full h-full rounded-2xl"
        />
      </div>
      <AiFillCaretRight
        className="absolute z-20 right-px top-1/2"
        width={60}
        onClick={() => increaseImageIndex()}
      />
    </div>
  );
};

export default Slider;
