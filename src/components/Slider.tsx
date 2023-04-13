import React, { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";

const Slider = ({ images }: any) => {
    let [imageIndex, setImageIndex] = useState(0);
    console.log(images);


    function increaseImageIndex() {
        if (imageIndex == images.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex + 1);
        }
    }

    return (

        <div className="relative flex align-middle">
            <div className="sliderImgContainer z-10">
                <img
                    src={images[imageIndex]}
                    alt=""
                    className="object-contain"
                />
            </div>
            <AiFillCaretRight
                className="absolute z-20 right-px top-1/2"
                width={60}
                onClick={() => increaseImageIndex()} />
        </div>

    );
}

export default Slider
