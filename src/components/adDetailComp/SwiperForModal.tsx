import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { Navigation, EffectCreative } from "swiper";

export default function SwiperForModal({ data }: any): JSX.Element {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        navigation={true}
        hashNavigation={{
          watchState: true,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Navigation, EffectCreative]}
        className="mySwiper"
      >
        {data?.propertyID?.photos?.map((item: string, index: number) => {
          return (
            <div key={index}>
              <SwiperSlide>
                <div className="h-[900px]">
                  <img
                    src={item}
                    alt="haha"
                    className="object-fill w-[90%] h-[90%] rounded-lg drop-shadow-lg"
                  />
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
}
