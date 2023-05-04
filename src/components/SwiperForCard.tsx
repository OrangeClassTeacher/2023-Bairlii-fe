import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper";

export default function SwiperSlider({ data }: any) {
  console.log(data?.propertyID?.photos[0]);

  if (data) {
    return (
      <div className="h-48 w-full">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          loop={true}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          {data?.propertyID?.photos?.map((item: string, index: number) => {
            return (
              <div key={index}>
                <SwiperSlide>
                  <div className="h-48 w-full">
                    <img
                      src={item}
                      alt="haha"
                      className="object-fill w-full h-full"
                    />
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    );
  }
}
