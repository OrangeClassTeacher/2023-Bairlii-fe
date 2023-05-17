import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { Autoplay, EffectCube, Pagination } from "swiper";

export default function SwiperSlider({ data }: any): any {
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
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={true}
          modules={[Autoplay, EffectCube, Pagination]}
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
