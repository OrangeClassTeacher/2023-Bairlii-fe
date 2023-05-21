import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Navigation, EffectCreative } from "swiper";
import Image from "next/image";

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
        {data?.propertyID?.photos?.map((item: string, index: number) => (
          <div key={index}>
            <SwiperSlide>
              <div className="h-[900px]">
                <Image
                  src={item}
                  alt="haha"
                  height={500}
                  width={500}
                  className="object-fill w-[90%] h-[90%] rounded-lg drop-shadow-lg"
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
