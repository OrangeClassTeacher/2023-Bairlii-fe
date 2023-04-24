import React, { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

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
    <div>
      <div>
        <img src={images[imageIndex]} alt="picture" />
        <AiFillCaretLeft />
        <AiFillCaretRight />
      </div>
      <div>
        <img src={images[0]} alt="picture" />
        <img src={images[1]} alt="picture" />
        <img src={images[2]} alt="picture" />
        <img src={images[3]} alt="picture" />
      </div>
    </div>
  );
};
